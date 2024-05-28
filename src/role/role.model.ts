import { AutoIncrement, BelongsToMany, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";
interface RoleAttrs {
  value: string
}
@Table({tableName: 'role'})
export class Role extends Model<Role, RoleAttrs> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  _id: number

  @Column(DataType.STRING)
  value: string

  // @BelongsToMany(() => Library, () => Library_Roles)
  // libraries: Library[]
}