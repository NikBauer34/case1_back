import { AllowNull, AutoIncrement, BelongsTo, BelongsToMany, Column, DataType, Default, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Library } from "src/library/library.model";
import { Catalog_Book } from "./catalog-item.model";
interface CatalogAttrs {
  title: string,
  type: 'private' | 'public',
  libraryId: number,
  parent: number
}
@Table({tableName: 'catalog'})
export class Catalog extends Model<Catalog, CatalogAttrs> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  _id: number

  @AllowNull(false)
  @Column(DataType.STRING)
  title: string

  @AllowNull(false)
  @Column(DataType.STRING)
  type: 'private' | 'public'

  @AllowNull(false)
  @Column(DataType.INTEGER)
  libraryid: number

  @AllowNull(false)
  @Column(DataType.INTEGER)
  parent: number

  @Default([])
  @Column(DataType.ARRAY(DataType.INTEGER))
  children: number[]

  @Default([])
  @Column(DataType.ARRAY(DataType.INTEGER))
  books: number[]

  @Default([])
  @Column(DataType.ARRAY(DataType.INTEGER))
  items: number[]
}