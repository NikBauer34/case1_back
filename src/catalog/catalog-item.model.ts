import { Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Catalog } from "./catalog.model";
import { Book } from "src/book/book.model";

@Table
export class Catalog_Book extends Model {
  @ForeignKey(() => Catalog)
  @Column
  CatalogId: number;

  @ForeignKey(() => Book)
  @Column
  BookId: number;
}