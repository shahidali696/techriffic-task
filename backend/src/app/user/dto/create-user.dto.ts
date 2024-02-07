
import { IsEmail, IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @IsNotEmpty()
    @ApiProperty()
    firstName: string;

    @IsOptional()
    @ApiProperty({ required: false })
    lastName?: string;

    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    email: string;

    @IsNotEmpty()
    @ApiProperty()
    password: string;
}