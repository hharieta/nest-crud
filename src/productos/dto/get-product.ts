import { IsNumber, IsNotEmpty, IsString, Min } from "class-validator";

export class GetProductDto {
    @IsNotEmpty()
    @IsNumber()
    id: number;

    name: string;
    price: number;
    url: string;
}