import { IsNumber, IsOptional, IsString, IsNotEmpty, Min } from 'class-validator';

export class UpdateProductDto {
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsString()
    name?: string;

    @IsNumber()
    @Min(0)
    price?: number;

    @IsString()
    url?: string;
}