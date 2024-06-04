import { AllowNull, AutoIncrement, BelongsTo, Column, DataType, Default, ForeignKey, HasMany, HasOne, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Account } from "src/account/account.model";
import { Library } from "src/library/library.model";

interface BasketAttrs {
  account: Account,
  title: string,
  return_date: Date,
  items: {bookId: number, count: number}[]
}
@Table({tableName: 'basket'})
export class Basket extends Model<Basket, BasketAttrs> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  _id: number

  @AllowNull(false)
  @Column(DataType.INTEGER)
  account:number

  @AllowNull(false)
  @Column(DataType.STRING)
  title: string

  @Column(DataType.DATE)
  coming_date: Date

  @Column(DataType.DATE)
  return_date: Date

  @Default('Создана')
  @Column(DataType.STRING)
  status: BasketStatus

  @AllowNull(false)
  @Column(DataType.INTEGER)
  library: number

  @Column(DataType.JSON)
  books: {book: number, count: number}[]

  @Column(DataType.JSON)
  items: {item: number, count: number}[]
}