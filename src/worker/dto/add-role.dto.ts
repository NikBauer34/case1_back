import { IsNumber, IsString } from "class-validator";

export class AddRoleDto {
  @IsString({message: 'Роль должна быть строкой'})
  readonly value: string
  @IsNumber({}, {message: 'ID должно быть числом'})
  readonly workerId: number
}