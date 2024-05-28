import { IsString, Length } from "class-validator";

export class CreateWorkerDto {
  @IsString({message: 'Имя должно быть строкой'})
  readonly name: string
  @IsString({message: 'Фамилия должна быть строкой'})
  readonly surname: string
  @IsString({message: 'Логин должен быть строкой'})
  @Length(3, 12, {message: 'Логин должен быть не меньше трех и не больше 12 символов'})
  readonly login: string
  @IsString({message: 'Пароль должен быть строкой'})
  @Length(3, 12, {message: 'Пароль должен быть не меньше трех и не больше 12 символов'})
  readonly password: string
  
}