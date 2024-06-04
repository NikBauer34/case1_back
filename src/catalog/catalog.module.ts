import { Module } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Catalog } from './catalog.model';
import { Catalog_Book } from './catalog-item.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Catalog, Catalog_Book])
  ],
  providers: [CatalogService]
})
export class CatalogModule {}
