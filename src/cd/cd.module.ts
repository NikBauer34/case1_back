import { Module } from '@nestjs/common';
import { CdService } from './cd.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { CD } from './cd.model';

@Module({
  imports: [
    SequelizeModule.forFeature([CD])
  ],
  providers: [CdService]
})
export class CdModule {}
