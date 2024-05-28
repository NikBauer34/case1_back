import { AllowNull, AutoIncrement, BelongsTo, Column, DataType, Default, ForeignKey, HasMany, HasOne, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Account } from "src/account/account.model";
import { Item } from "src/item/item.model";
import { Library } from "src/library/library.model";

interface BasketAttrs {
  account: Account,
  title: string,
  return_date: Date,
  items: {bookId: Item, count: number}[]
}
@Table({tableName: 'basket'})
export class Basket extends Model<Basket, BasketAttrs> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  _id: number

  @ForeignKey(() => Account)
  account: Account

  @AllowNull(false)
  @Column(DataType.STRING)
  title: string

  @Column(DataType.DATE)
  return_date: Date

  @Default('Создана')
  @Column(DataType.STRING)
  status: BasketStatus

  @ForeignKey(() => Library)
  libraryId: number

  @ForeignKey(() => Item)
  items: {bookId: Item, count: number}[]
}