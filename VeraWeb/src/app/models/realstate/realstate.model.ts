import { AmenitiesModel } from "./amenities.model";
import { PropertyTypeModel } from "./propertytype.model";
import { SaleTypeModel } from "./saletype.model";

export class RealStateModel {
    dimension: number = 0;
    innerRadius: number = 0;
    backgroundClass: string = "";
    backgroundOpacity: number = 0;

    realStateID: number = 0;
    realStateName : string = "";
    shortDescription : string = "";
    longDescription : string = "";
    address: string = "";
    countryName : string = "";
    ctateName : string = "";
    cityName : string = "";
    initialPrice: number = 0;
    finalPrice: number = 0; 
    amenities: AmenitiesModel[] = [];
    propertyType: any = new PropertyTypeModel;
    saleType: any = new SaleTypeModel;  
}