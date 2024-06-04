import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize'
import { ConfigModule } from '@nestjs/config';
import { CloudModule } from './cloud/cloud.module';
import { AuthModule } from './auth/auth.module';
import { BotIntegrationModule } from './bot_integration/bot_integration.module';
import { LibraryModule } from './library/library.module';
import { RoleModule } from './role/role.module';
import { CatalogModule } from './catalog/catalog.module';
import { AccountModule } from './account/account.module';
import { BookModule } from './book/book.module';
import { UserModule } from './user/user.module';
import { RatingModule } from './rating/rating.module';
import { BasketModule } from './basket/basket.module';
import { Library } from './library/library.model';
import { Account } from './account/account.model';
import { Role } from './role/role.model';
import { User } from './user/user.model';
import { Book } from './book/book.model';
import { Rating } from './rating/rating.model';
import { Catalog } from './catalog/catalog.model';
import { Basket } from './basket/basket.model';
import { Account_User } from './account/account-user.model';
import { Worker } from './worker/worker.model';
import { WorkerModule } from './worker/worker.module';
import { Worker_Role } from './worker/worker-role.model';
import { TokenModule } from './jwt/token.module';
import { Catalog_Book } from './catalog/catalog-item.model';
import { ItemModule } from './item/item.module';
import { Item } from './item/item.model';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`
    }),
    SequelizeModule.forRoot({
      uri: `${process.env.DB_URI}`,
      //postgres://postgres:9a10ur1Z@localhost/unilib
      // models: [Library, Account, Role],
      models: [Library, User, Role, Account, Book, Rating, Catalog, Basket, Account_User, Catalog_Book, Worker, Worker_Role, Item],
      autoLoadModels: true
    }),
    CloudModule,
    AuthModule,
    BotIntegrationModule,
    LibraryModule,
    RoleModule,
    CatalogModule,
    AccountModule,
    BookModule,
    UserModule,
    RatingModule,
    BasketModule,
    WorkerModule,
    TokenModule,
    ItemModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
