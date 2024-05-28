import { AllowNull, AutoIncrement, BelongsToMany, Column, DataType, Default, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Catalog } from "src/catalog/catalog.model";
interface CDAttrs {
  title: string,
  description: string,
  picture_path: string,
  amount: [{count: number, status: IStatus}]
}
type IStatus = 'В наличии' | 'В наличии, но кто-то уже положил в корзину' | 'Кто-то уже читает' | 'Потеряна'
@Table({tableName: 'cd'})
export class CD extends Model<CD, CDAttrs> {
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

  @Default([])
  @Column(DataType.ARRAY(DataType.JSON))
  amount: {count: number, status: IStatus}
}