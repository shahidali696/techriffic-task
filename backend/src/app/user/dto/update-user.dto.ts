import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

import { IsEmail, IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsNotEmpty()
    firstName: string;

    @IsOptional()
    lastName?: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsOptional()
    providerId?: string;

    @IsOptional()
    @IsBoolean()
    @Transform(({ value }) => value === 'true') // Transform string to boolean
    isVerified?: boolean = true;

    @IsBoolean()
    @Transform(({ value }) => value === 'true')
    isActive: boolean = true;

    @IsOptional()
    avatar?: string;
}
