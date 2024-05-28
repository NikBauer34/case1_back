import { AllowNull, AutoIncrement, BelongsToMany, Column, DataType, Default, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Catalog } from "src/catalog/catalog.model";
import { Account } from "src/account/account.model";
import { Basket } from "src/basket/basket.model";
import { Item } from "src/item/item.model";
import { Worker } from "src/worker/worker.model";

interface LibraryAttrs {
  title: string
}
@Table({tableName: 'library'})
export class Library extends Model<Library, LibraryAttrs> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  _id: number

  @AllowNull(false)
  @Column(DataType.STRING)
  title: string

  @Default([])
  @Column(DataType.ARRAY(DataType.INTEGER))
  catalogs: number[]

  @Default([])
  @Column(DataType.ARRAY(DataType.INTEGER))
  items: number[]

  @Default([])
  @Column(DataType.ARRAY(DataType.INTEGER))
  accounts: number[]

  @Default([])
  @Column(DataType.ARRAY(DataType.INTEGER))
  baskets: number[]

  @Default([])
  @Column(DataType.ARRAY(DataType.STRING))
  events: string[]

  @Default([])
  @Column(DataType.ARRAY(DataType.INTEGER))
  workers: number[]
}