import { 
    Controller, 
    Body, 
    Get, 
    Post, 
    Request, 
    HttpCode, 
    HttpStatus, 
    UseGuards
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { SignInDto} from './dto/sign-in-dto';
import { User } from '../users/interfaces/user.interface';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    @HttpCode(HttpStatus.OK)
    async signIn(@Body() signInDto: SignInDto): Promise<{access_token: string}> {
        return await this.authService.signIn(signInDto.username, signInDto.password);
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req: Request & {user: User}): User {
        return req.user;
    }
}
