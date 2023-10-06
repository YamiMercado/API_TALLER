import { IsNotEmpty } from "class-validator";

export class CreateProductDto {

    @IsNotEmpty({message:"Ingrese la informacion"})
    product_type_id:number;
    description:String;
}
