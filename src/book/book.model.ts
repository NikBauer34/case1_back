import { AllowNull, AutoIncrement, BelongsToMany, Column, DataType, Default, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Catalog } from "src/catalog/catalog.model";
import { BookType, IBookPG, IStatus } from "./types/BookStatus";
interface BookAttrs {
  title: string,
  pg: IBookPG
  description: string,
  picture_path: string,
  amount: [{count: number, status: IStatus}]
}

@Table({tableName: 'cd'})
export class Book extends Model<Book, BookAttrs> {
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

  @Default(null)
  @Column(DataType.STRING)
  admission_year: string | null

  @Default('Не укакзан')
  @Column(DataType.STRING)
  author: string

  @Default(null)
  @Column(DataType.STRING)
  publication_year: string | null

  @Default(0)
  @Column(DataType.INTEGER)
  total_amount: number

  @Default(0)
  @Column(DataType.INTEGER)
  price: number

  @Default(0)
  @Column(DataType.INTEGER)
  sum: number

  @Default(null)
  @Column(DataType.STRING)
  lading_bill: string

  @AllowNull(false)
  @Column(DataType.STRING)
  book_type: BookType

  @Default({})
  @Column(DataType.JSON)
  history: {time: Date[], copies: {count: number, status: IStatus}[][]}
}