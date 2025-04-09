import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService:UsersService){}
    
    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    getProfile(@Req() req){
        const user = this.userService.findById(req.user.userId);
        return user;
    }
}
