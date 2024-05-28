import { AllowNull, AutoIncrement, BelongsToMany, Column, DataType, Default, ForeignKey, HasMany, HasOne, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Library } from "src/library/library.model";
import { Account_User } from "./account-user.model";
import { Basket } from "src/basket/basket.model";
import { User } from "src/user/user.model";
import { Item } from "src/item/item.model";
import { Rating } from "src/rating/rating.model";
interface AccountAttrs {
  nmae: string
  surname: string
  patronymic?: string,
  library_login: string,//h
  library_password: string,
  library: Library[]
}
@Table({tableName: 'account'})
export class Account extends Model<Account, AccountAttrs> {
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

  @Column(DataType.STRING)
  patronymic: string | null

  @AllowNull(false)
  @Column(DataType.STRING)
  class: string

  @AllowNull(false)
  @Column(DataType.STRING)
  library_login: string

  @AllowNull(false)
  @Column(DataType.STRING)
  library_password: string

  @Default([])
  @Column(DataType.ARRAY(DataType.INTEGER))
  subscribed_items: number[]

  @Default([])
  @Column(DataType.ARRAY(DataType.INTEGER))
  liked_items: number[]

  @Default([])
  @Column(DataType.ARRAY(DataType.INTEGER))
  library: number[]

  @Default([])
  @Column(DataType.ARRAY(DataType.INTEGER))
  baskets: number[]

  @BelongsToMany(() => User, () => Account_User)
  owners: number[]

  @Default([])
  @Column(DataType.ARRAY(DataType.INTEGER))
  ratings: number[]

  @Column(DataType.JSON)
  settings: {isMuted: boolean, isLibrarySubscribed: boolean}
}