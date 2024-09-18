import { IsNotEmpty, IsString, IsNumber, Min } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    precio: number;

    @IsNotEmpty()
    @IsString()
    url: string;
}