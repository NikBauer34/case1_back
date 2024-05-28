import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './role.model';
import { CreateRoleDto } from './dto/create-role.dto';

@Injectable()
export class RoleService {
  constructor(@InjectModel(Role) private roleModel: typeof Role) {}

  async create(dto: CreateRoleDto) {
    const {value} = dto
    const candidate_role = await this.roleModel.findOne({where: {value}})
    if (candidate_role) {
      throw new HttpException('Такая роль уже есть', HttpStatus.BAD_REQUEST)
    }
    const role = await this.roleModel.create(dto)
    return role
  }
  async getRoleByValue(value: string) {
    const role = await this.roleModel.findOne({where: {value}})
    if (!role) {
      throw new HttpException('Такой роли не существует', HttpStatus.BAD_REQUEST)
    }
    return role
  }
  async getRoleByPk(_id: number) {
    const role = await this.roleModel.findByPk(_id)
    if (!role) {
      throw new HttpException('Такой роли не существует', HttpStatus.BAD_REQUEST)
    }
    return role
  }
}
