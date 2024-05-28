import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateWorkerDto } from 'src/worker/dto/create-worker.dto';
import { WorkerService } from 'src/worker/worker.service';
import * as bcrypt from 'bcrypt'
import { Worker } from 'src/worker/worker.model';
import { LoginWorkerDto } from 'src/worker/dto/login-worker.dto';
import { RoleService } from 'src/role/role.service';
import { InitWorkerDto } from 'src/worker/dto/init-worker.dto';
@Injectable()
export class AuthService {

  constructor(private workerService: WorkerService,
              private jwtService: JwtService,
            private roleService: RoleService) {}
  async login(dto: LoginWorkerDto) {
    const worker = await this.validateWorker(dto)
    const token = this.generateToken(worker)
    let roles = []
    for (let id of worker.roles) {
      const role = await this.roleService.getRoleByPk(id)
      roles.push(role)
    }
    const output_worker = {worker, token, roles}
    return output_worker
  }
  async initialize(dto: InitWorkerDto) {
    const worker = await this.validateWorker({login: dto.login, password: dto.password})
    const new_worker = await this.workerService.addChatId(worker._id, dto.chatId)
    return new_worker
  }
  async registration(dto: CreateWorkerDto, role: string, library_id: number) {
    const candidate = await this.workerService.getWorkerByLogin(dto.login)
    if (candidate) {
      throw new HttpException('Пользователь с таким логином существует', HttpStatus.BAD_REQUEST)
    }
    const hashPassword = await bcrypt.hash(dto.password, 5)
    const worker = await this.workerService.createWorker({...dto, password: hashPassword}, role, library_id)
    console.log(worker._id)
    return worker
  }
  private generateToken(worker: Worker) {
    const payload = {_id: worker._id, role: worker.roles}
    return this.jwtService.sign(payload)
  } 
  private async validateWorker(dto: LoginWorkerDto) {
    const worker = await this.workerService.getWorkerByLogin(dto.login)
    const passwordEquals = await bcrypt.compare(dto?.password, worker.password)
    if (!worker.chatId) {
      throw new HttpException('Аккаунт не проинициализирован в боте', HttpStatus.BAD_REQUEST)
    }
    if (worker && passwordEquals) {
      return worker
    }
    throw new UnauthorizedException({message: 'Некорректный логин или пароль'})
  }      
}
