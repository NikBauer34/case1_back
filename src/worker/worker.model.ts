import { AllowNull, AutoIncrement, BelongsToMany, Column, DataType, Default, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Account_User } from "src/account/account-user.model";
import { Account } from "src/account/account.model";
import { Library } from "src/library/library.model";
import { Role } from "src/role/role.model";
import { Worker_Role } from "./worker-role.model";
interface WorkerAttrs {
  library: number
  roles: number[]
  name: string,
  surname: string,
  login: string,
  password: string,
}
@Table({tableName: 'worker'})
export class Worker extends Model<Worker, WorkerAttrs> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  _id: number

  @AllowNull(false)
  @Column(DataType.STRING)
  name: string

  @AllowNull(false)
  @Column(DataType.STRING)
  surname: string

  @AllowNull(false)
  @Column(DataType.STRING)
  login: string

  // @AllowNull(false)
  @Column(DataType.STRING)
  password: string

  @Default([])
  @Column(DataType.ARRAY(DataType.INTEGER))
  roles: number[]

  @AllowNull(true)
  @Default(null)
  @Column(DataType.INTEGER)
  chatId: number | null

  @AllowNull(false)
  @Column(DataType.INTEGER)
  library: number

  @Default(0)
  @Column(DataType.INTEGER)
  unread_buckets: number
  
}