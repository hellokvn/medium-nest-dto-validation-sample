import { ArrayMinSize, IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class FormDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public email: string;

  @IsNumber()
  public age: number;

  @IsBoolean()
  public acceptedTOS: boolean;

  @IsArray()
  @IsNumber({ allowNaN: false }, { each: true })
  @ArrayMinSize(1)
  public nums: number[];
}