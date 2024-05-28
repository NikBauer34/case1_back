import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Account } from './account.model';
import { Account_User } from './account-user.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Account, Account_User])
  ],
  providers: [AccountService]
})
export class AccountModule {}
