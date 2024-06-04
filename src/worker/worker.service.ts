import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Worker } from './worker.model';
import { RoleService } from 'src/role/role.service';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { CreateRoleDto } from 'src/role/dto/create-role.dto';
import { AddRoleDto } from './dto/add-role.dto';
import { LibraryService } from 'src/library/library.service';
import { InitWorkerDto } from './dto/init-worker.dto';
import { AuthService } from '../auth/auth.service';
import { TokenService } from 'src/jwt/token.service';
import { Role } from 'src/role/role.model';

@Injectable()
export class WorkerService {
  constructor(@InjectModel(Worker) private workerRepository: typeof Worker,
              private roleService: RoleService,
              private libraryService: LibraryService,
              private jwtService: TokenService
            ) {}
  
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
    if (!worker) {
      throw new HttpException('Работник не зарегистрирован', HttpStatus.BAD_REQUEST)
    }
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
    worker.chatId = Number(chatId)
    await worker.save()
    return worker
  }
  async getInitData(token:string) {

    const data: {_id: number, role: number[]} = this.jwtService.verify(token)
    const worker = await this.workerRepository.findByPk(data._id)
    console.log(worker.roles)
    let worker_roles: Role[] = []
    for (let el in worker.roles) {
      console.log(el)
      const role = await this.roleService.getRoleByPk(Number(el)+1)
      worker_roles.push(role)
    }
    console.log({worker, worker_roles})
    return {worker, worker_roles}
  }
}
