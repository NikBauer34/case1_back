import { Module } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Catalog } from './catalog.model';
import { Catalog_Item } from './catalog-item.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Catalog, Catalog_Item])
  ],
  providers: [CatalogService]
})
export class CatalogModule {}
