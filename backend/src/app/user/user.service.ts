import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../../core/prisma.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }
  async create(createUserDto: CreateUserDto) {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(createUserDto.password, saltOrRounds);
    createUserDto.password = hashedPassword;
    try {
      const checkEmail = await this.prisma.user.findFirst({
        where: {
          email: createUserDto.email
        }
      })
      if (checkEmail) {
        return { message: 'This email already Registered' }
      }
      const user = await this.prisma.user.create({
        data: createUserDto
      })
      if (user) {
        return { message: 'User Created Successfully', user }
      }
    } catch (error) {
      return { message: 'User Createtion failed ', error }
    }
  }

  async findAll() {
    try {
      const findUser = await this.prisma.user.findMany()
      if (findUser) {
        return { message: 'All User Fatch Successfully', findUser }
      }
    } catch (error) {
      return `Failed to facth users`;
    }
  }

  async findOne(id: string) {
    console.log(id)
    try {
      const findUser = await this.prisma.user.findFirst({
        where: {
          id
        }
      })
      if (findUser) {
        return { message: 'User Find Successfully', findUser }
      }
    } catch (error) {
      return `Failed to find #${id} user`;
    }
  }

  async update(id: any, updateUserDto: UpdateUserDto) {
    try {
      const updateUser = await this.prisma.user.update({
        where: {
          id
        },
        data: updateUserDto
      })

      if (updateUser) {
        return { message: 'User Updated Successfully', updateUser }
      }
    } catch (error) {
      return `Failed to update#${id} user`;
    }
  }

  async remove(id: any) {
    try {
      const deleteUser = await this.prisma.user.delete({ where: { id } })
      if (deleteUser) {
        return { message: 'User Deleted Successfully', deleteUser }
      }
    } catch (error) {
      return `Failed to delete #${id} user`;
    }
  }
}
