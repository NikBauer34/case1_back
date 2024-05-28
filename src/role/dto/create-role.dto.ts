import { IsString } from "class-validator";

export class CreateRoleDto {
  @IsString({message: 'Название роли должно быть строкой'})
  readonly value: string
}