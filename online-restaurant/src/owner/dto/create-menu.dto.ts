import { IsString, IsNumber, IsOptional, IsNotEmpty } from 'class-validator'; 

export class CreateMenuDto { 
@IsString() 
@IsNotEmpty() 
name!: string; 

@IsString() 
@IsNotEmpty() 
description!: string; 

@IsNumber() 
price!: number; 

@IsString() 
@IsOptional() 
availability?: string;
}