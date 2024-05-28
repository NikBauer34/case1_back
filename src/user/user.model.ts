import { AllowNull, AutoIncrement, BelongsToMany, Column, DataType, Default, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Account_User } from "src/account/account-user.model";
import { Account } from "src/account/account.model";
interface UserAttrs {
  login: string,
  password: string,
}
@Table({tableName: 'user'})
export class User extends Model<User, UserAttrs> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  _id: number

  @AllowNull(false)
  @Column(DataType.STRING)
  login: string

  @AllowNull(false)
  @Column(DataType.STRING)
  password: string

  @Default(0)
  @Column(DataType.INTEGER)
  fine_coins: number

  @Default(0)
  @Column(DataType.INTEGER)
  pleasure_coins: number

  @AllowNull(true)
  @Default(null)
  @Column(DataType.INTEGER)
  chatId: number | null

  @Default([])
  @Column(DataType.ARRAY(DataType.INTEGER))
  accounts: number[]

  @Default({isNotifiedDaily: true})
  @Column(DataType.JSON)
  settings: {isNotifiedDaily: boolean}
}