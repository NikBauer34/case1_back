import { Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Account } from "./account.model";
import { User } from "src/user/user.model";

@Table
export class Account_User extends Model {
  @ForeignKey(() => Account)
  @Column
  AccountId: number;

  @ForeignKey(() => User)
  @Column
  UserId: number;
}