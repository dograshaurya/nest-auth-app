import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import {User, UserSchema} from './user.schema';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports : [MongooseModule.forFeature([{name:User.name,schema:UserSchema}])],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
