interface realState {

  realStateID: string;
  realStateImageURL: string;
  realStateName: string;
  shortDescription: string;
  address: string;
  countryName: string;
  stateName: string;
  cityName: string;
  initialPrice: number;
  finalPrice: number;


  realStateTypes: realStateTypes;
  saleType: saleType;
   
}

interface realStateTypes {
  propertyTypeID: string;
  propertyTypeName: string;
  propertyTypeDescription: string;
}

interface saleType {
  saleTypeID: string;
  saleTypeName: string;
  saleTypeDescription: string;
}
