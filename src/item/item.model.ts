import { AllowNull, AutoIncrement, BelongsToMany, Column, DataType, Default, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Book } from "src/book/book.model";
import { CD } from "src/cd/cd.model";
import { Textbook } from "src/textbook/textbook.model";
import { IItem, ItemType } from "./types/Item";
import { Rating } from "src/rating/rating.model";
import { Catalog } from "src/catalog/catalog.model";
import { Catalog_Item } from "src/catalog/catalog-item.model";
interface ItemAttrs {
  item: IItem,
  type: ItemType,
  library:number
}
@Table({tableName: 'item'})
export class Item extends Model<Item, ItemAttrs> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  _id: number

  @Column(DataType.INTEGER)
  get item(): IItem {
    return this.getDataValue('item')
  }
  set item(value: IItem) {
    this.setDataValue('item', value)
  }

  @AllowNull(false)
  @Column(DataType.STRING)
  type: ItemType
  
  @Default(0)
  @Column(DataType.INTEGER)
  ratings_count: number

  @Default(0)
  @Column(DataType.INTEGER)
  mean_rating: number
  
  @AllowNull(false)
  @Column(DataType.INTEGER)
  library: number

  @Default([])
  @Column(DataType.ARRAY(DataType.INTEGER))
  rating: number[]

  @Default([])
  @Column(DataType.ARRAY(DataType.INTEGER))
  catalogs: number[]
}