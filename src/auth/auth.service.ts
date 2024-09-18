import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async signIn(
        username: string, 
        password: string
    ): Promise<{access_token: string}> {
        const user = await this.usersService.findOne(username);
        if (!user) {
            throw new UnauthorizedException('User not found');
        }

        if (user?.password !== password) {
            throw new UnauthorizedException('Password is incorrect');
        }

        // const { password: _, ...result } = user;
        
        // TODO: Generate a JWT and return it here
        // instead of the user object

        // return result;

        const payload = { sub: user.userId, username: user.username };
        return {
        access_token: await this.jwtService.signAsync(payload),
        };

    }
}
