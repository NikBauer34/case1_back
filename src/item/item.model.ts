import { AllowNull, AutoIncrement, BelongsTo, BelongsToMany, Column, DataType, Default, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { IBookPG, IStatus } from "src/book/types/BookStatus";
interface ItemAttrs {
  title: string;
  description: string;
  picture_path: string[];
  amount: {count: number, status: IStatus}[]
}
@Table({tableName: 'item'})
export class Item extends Model<Item, ItemAttrs> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  _id: number

  @AllowNull(false)
  @Column(DataType.STRING)
  title: string


  @AllowNull(false)
  @Column(DataType.STRING)
  description: string

  @Default([])
  @Column(DataType.ARRAY(DataType.STRING))
  picture_path: string[]

  @Default('6+')
  @Column(DataType.STRING)
  class: `${number}` | IBookPG
  @Default([])
  @Column(DataType.ARRAY(DataType.JSON))
  amount: {count: number, status: IStatus}[]

  @Default('Не укакзан')
  @Column(DataType.STRING)
  author: string

  @Default(0)
  @Column(DataType.INTEGER)
  total_amount: number

  @Default(0)
  @Column(DataType.INTEGER)
  price: number
}