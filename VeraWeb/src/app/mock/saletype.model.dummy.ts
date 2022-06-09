import { SaleTypeModel } from "../models/realstate/saletype.model";

export class SaleTypesModelDummy{
    
    private saleTypesCollection: SaleTypeModel[] = [];

     constructor() { }

    getSaleTypes(){
          
        this.saleTypesCollection.push({
            saleType: 1,
            saleTypeName: "Venta",
            saleTypeDescription: ""
        });

        this.saleTypesCollection.push({
            saleType: 2,
            saleTypeName: "Renta",
            saleTypeDescription: ""
        });

        this.saleTypesCollection.push({
            saleType: 3,
            saleTypeName: "Separacion",
            saleTypeDescription: ""
        });

        return this.saleTypesCollection;
    }
}