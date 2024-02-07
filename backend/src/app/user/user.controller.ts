import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '../auth/auth.guard';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('create')
  async create(@Body() createUserDto: CreateUserDto) {
    console.log('Request ', createUserDto)
    const response = await this.userService.create(createUserDto);
    console.log('response ', response)
    return response
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id)
    return this.userService.findOne(id);
  }

  @Patch('update:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
