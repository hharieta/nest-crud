import { Controller, Body, Post, HttpCode, HttpStatus} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto} from './dto/sign-in-dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    @HttpCode(HttpStatus.OK)
    async signIn(@Body() signInDto: SignInDto): Promise<any> {
        return this.authService.signIn(signInDto.username, signInDto.password);
    }
}
