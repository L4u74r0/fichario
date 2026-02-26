import { Controller, Post, Body, Get, Req, UseGuards, Param} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { OnboardingUserDto } from '../dto/onboarding-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.usersService.create(dto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  me(@Req() req) {
    return req.user;
  }

  
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(+id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('onboarding')
    onboarding(
  @Req() req, @Body() dto: OnboardingUserDto,) {
    return this.usersService.onboarding(req.user.id, dto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
}
