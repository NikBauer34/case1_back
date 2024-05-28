import { AllowNull, AutoIncrement, BelongsToMany, Column, DataType, ForeignKey, HasOne, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Account } from "src/account/account.model";
import { Item } from "src/item/item.model";
import { User } from "src/user/user.model";
interface RatingAttrs {
  item: Item,
  account: User,
  rating: number
}
@Table({tableName: 'rating'})
export class Rating extends Model<Rating, RatingAttrs> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  _id: number

  @ForeignKey(() => Item)
  item: Item

  @ForeignKey(() => Account)
  account: number

  @AllowNull(false)
  @Column(DataType.INTEGER)
  rating: number

}