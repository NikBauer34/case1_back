import { AllowNull, AutoIncrement, BelongsToMany, Column, DataType, Default, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
interface TextbookAttrs {
  title: string,
  description: string,
  picture_path: string,
  class_needed: number,
  amount: [{count: number, status: IStatus}]
}
type IStatus = 'В наличии' | 'В наличии, но кто-то уже положил в корзину' | 'Кто-то уже читает' | 'Потеряна'
@Table({tableName: 'cd'})
export class Textbook extends Model<Textbook, TextbookAttrs> {
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

  @Default(0)
  @Column(DataType.INTEGER)
  mean_rating: number

  @Column(DataType.STRING)
  picture_path: string

  @AllowNull(false)
  @Column(DataType.INTEGER)
  class_needed: number

  @Default([])
  @Column(DataType.ARRAY(DataType.JSON))
  amount: {count: number, status: IStatus}[]
}