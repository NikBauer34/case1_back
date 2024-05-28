import { Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Worker } from "./worker.model";
import { Role } from "src/role/role.model";

@Table
export class Worker_Role extends Model {
  @ForeignKey(() => Worker)
  @Column
  WorkerId: number;

  @ForeignKey(() => Role)
  @Column
  RoleId: number;
}