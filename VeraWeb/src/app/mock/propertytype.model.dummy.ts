import { PropertyTypeModel } from "../models/realstate/propertytype.model";

export class PropertyTypeModelDummy{
    private propertyTypeCollection: PropertyTypeModel[] = [];

    constructor() {}

    getPropertyTypes(){
        this.propertyTypeCollection.push({
            propertyTypeID: 1,
            propertyTypeName: "Casa",
            propertyTypeDescription: ""
        });

        this.propertyTypeCollection.push({
            propertyTypeID: 2,
            propertyTypeName: "Departamento",
            propertyTypeDescription: ""
        });

        this.propertyTypeCollection.push({
            propertyTypeID: 3,
            propertyTypeName: "Condominio",
            propertyTypeDescription: ""
        });
        this.propertyTypeCollection.push({
            propertyTypeID: 4,
            propertyTypeName: "Bodega",
            propertyTypeDescription: ""
        });

        return this.propertyTypeCollection;
    }
}