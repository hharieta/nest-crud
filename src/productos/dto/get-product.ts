import { IsNumber, IsNotEmpty } from "class-validator";

export class GetProductDto {
    @IsNotEmpty()
    @IsNumber()
    id: number;

}