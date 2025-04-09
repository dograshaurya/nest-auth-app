import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private readonly userModel: Model<User>,
    ){}

    async create(data:Partial<User>):Promise<User>{
        const user = new this.userModel(data);
        return user.save();
    }

    async findByEmail(email:string):Promise<User | null> {
        return this.userModel.findOne({email}).exec();
    }

    async findById(id:string): Promise<User | null> {
        return this.userModel.findById(id).select('-password').exec();
    }
}
