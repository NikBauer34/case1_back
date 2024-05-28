import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { RoleService } from './role.service';
import { ValidationPipe } from 'pipes/validation.pipe';
import { CreateRoleDto } from './dto/create-role.dto';

@Controller('role')
export class RoleController {
  constructor(private roleService: RoleService) {}

  @Post('/create')
  async create(@Body() dto: CreateRoleDto) {
    return this.roleService.create(dto)
  }
}
