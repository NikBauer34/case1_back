import { AllowNull, AutoIncrement, BelongsToMany, Column, DataType, ForeignKey, HasOne, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Account } from "src/account/account.model";
import { User } from "src/user/user.model";
interface RatingAttrs {
  book: number,
  account: User,
  rating: number
}
@Table({tableName: 'rating'})
export class Rating extends Model<Rating, RatingAttrs> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  _id: number

  @AllowNull(false)
  @Column(DataType.INTEGER)
  book: number[]

  @AllowNull(false)
  @Column(DataType.INTEGER)
  account: number

  @AllowNull(false)
  @Column(DataType.INTEGER)
  rating: number

  @AllowNull(false)
  @Column(DataType.INTEGER)
  ratings_count: number
}