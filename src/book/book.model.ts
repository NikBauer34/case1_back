import { AllowNull, AutoIncrement, BelongsToMany, Column, DataType, Default, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Catalog } from "src/catalog/catalog.model";
import { IBookPG, IStatus } from "./types/BookStatus";
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

  @Column(DataType.STRING)
  picture_path: string

  @Column(DataType.STRING)
  pg: IBookPG
  @Default([])
  @Column(DataType.ARRAY(DataType.JSON))
  amount: {count: number, status: IStatus}[]
}