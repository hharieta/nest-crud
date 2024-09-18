import { IsOptional, IsString, IsNumber, Min } from "class-validator";

export class PatchProductDto {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsNumber()
    @Min(0)
    price?: number;

    @IsOptional()
    @IsString()
    url?: string;
}