import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Worker } from './worker.model';
import { RoleService } from 'src/role/role.service';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { CreateRoleDto } from 'src/role/dto/create-role.dto';
import { AddRoleDto } from './dto/add-role.dto';
import { LibraryService } from 'src/library/library.service';
import { InitWorkerDto } from './dto/init-worker.dto';

@Injectable()
export class WorkerService {
  constructor(@InjectModel(Worker) private workerRepository: typeof Worker,
              private roleService: RoleService,
              private libraryService: LibraryService) {}
  
  async createWorker(worker_dto: CreateWorkerDto, value: string, library_id: number) {
    const role = await this.roleService.getRoleByValue(value)
    const worker = await this.workerRepository.create({...worker_dto, library: library_id})
    
    worker.roles = [role._id]
    await worker.save()
    const new_library = await this.libraryService.addWorkerToLibrary(library_id, worker._id)
    console.log(worker)
    return worker
  }
  async getAllWorkers() {
    const workers = await this.workerRepository.findAll({include: {all: true}})
    return workers
  }
  async getWorkerByLogin(login: string) {
    const worker = await this.workerRepository.findOne({where: {login}})
    return worker
  }
  async addRole(dto: AddRoleDto) {
    const worker = await this.workerRepository.findByPk(dto.workerId)
    const role = await this.roleService.getRoleByValue(dto.value)
    if (role && worker) {
      // await worker.$add('roles', role._id)
      worker.roles.push(role._id)
    }
    await worker.save()
    throw new HttpException('Работник или роль не найдены', HttpStatus.NOT_FOUND)
  }
  async addChatId(workerId: number, chatId: number) {
    const worker = await this.workerRepository.findByPk(workerId)
    worker.chatId = chatId
    await worker.save()
    return worker
  }
}
