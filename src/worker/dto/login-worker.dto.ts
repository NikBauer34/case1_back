import { IsString, Length } from "class-validator";

export class LoginWorkerDto {
  @IsString({message: 'Логин должен быть строкой'})
  @Length(3, 12, {message: 'Логин должен быть не меньше трех и не больше 12 символов'})
  readonly login: string
  @IsString({message: 'Пароль должен быть строкой'})
  @Length(3, 12, {message: 'Пароль должен быть не меньше трех и не больше 12 символов'})
  readonly password: string
}