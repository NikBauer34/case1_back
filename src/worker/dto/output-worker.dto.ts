import { Role } from "../../role/role.model"

export class OutputWorker {
  readonly token: string
  readonly name: string
  readonly surname: string
  readonly login: string
  readonly roles: number[]
  constructor (dto: {token: string, name: string, surname: string, login: string, roles: number[]}) {
    this.token = dto.token,
    this.name = dto.name,
    this.surname = dto.surname,
    this.login = dto.login,
    this.roles = dto.roles
  }
}