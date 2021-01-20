import { Controller, Get, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@local/auth';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }

    @Get()
    getHello(): string {
        return 'Hello world';
    }

    @Get('test1')
    test1(): string {
        throw new UnauthorizedException();
    }

    @Get('test2')
    @UseGuards(AuthGuard)
    test2(): string {
        return 'Hello world';
    }
}
