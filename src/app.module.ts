import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    AuthModule, 
    UsersModule, 
    MongooseModule.forRoot('mongodb+srv://shaurya:mXqwCSgz93Ip4Zr1@cluster0.jr5dl.mongodb.net/nestjs-auth?retryWrites=true&w=majority&appName=Cluster0'),
  ],
})
export class AppModule {}
