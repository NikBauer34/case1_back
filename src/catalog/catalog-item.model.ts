import { Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Catalog } from "./catalog.model";
import { Item } from "src/item/item.model";

@Table
export class Catalog_Item extends Model {
  @ForeignKey(() => Catalog)
  @Column
  CatalogId: number;

  @ForeignKey(() => Item)
  @Column
  ItemId: number;
}