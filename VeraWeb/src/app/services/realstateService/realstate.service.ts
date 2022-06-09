import { Injectable } from '@angular/core';
import { AmenitiesModelDummy } from 'src/app/mock/amenities.model.dummy';
import { PropertyTypeModelDummy } from 'src/app/mock/propertytype.model.dummy';
import { RealStateModelDummy } from 'src/app/mock/realstate.model.dummy';
import { SaleTypesModelDummy } from 'src/app/mock/saletype.model.dummy';

@Injectable({
  providedIn: 'root'
})
export class RealstateService {
 
  constructor() { }

  getPropertyTypes(){
    var propertyModel = new PropertyTypeModelDummy();
    return propertyModel.getPropertyTypes();
    
  }

  getAmenities(){
    var amenitiesModel = new AmenitiesModelDummy();
    return amenitiesModel.getAmenities();
  }
  
  getSaleTypes(){
    var saleTypesModel = new SaleTypesModelDummy();
    return saleTypesModel.getSaleTypes();
  }

  getRealState(){
    var realStateModel = new RealStateModelDummy();
    return realStateModel.getRealState();    
  }

}
