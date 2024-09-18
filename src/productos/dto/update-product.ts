import { IsNumber, IsString, IsNotEmpty, Min } from 'class-validator';

export class UpdateProductDto {
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsString()
    name?: string;

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    price?: number;

    @IsNotEmpty()
    @IsString()
    url?: string;
}