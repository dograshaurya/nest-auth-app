import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs';


@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwtService: JwtService){}

    async register(data:any){
        const hashedPassword = await bcrypt.hash(data.password, 10);
        return this.userService.create({ ...data, password: hashedPassword});
    }

    async login(data:any){
        const user = await this.userService.findByEmail(data.email);
        if(!user || !(await bcrypt.compare(data.password, user.password))){
            throw new UnauthorizedException('Invalid credntials');
        }

        const payload = {sub:user._id, email:user.email};
        return {
            access_token: this.jwtService.sign(payload)
        }
    }

}
