import { AmenitiesModel } from "../models/realstate/amenities.model";

export class AmenitiesModelDummy{
    private amenitiesCollection: AmenitiesModel[] = [];

    constructor() { }

    getAmenities(){
        this.amenitiesCollection.push({
            amenitieID: 1,
            amenitieName: "Estacionamiento",
            amenitieDescription: ""
        });

        
        this.amenitiesCollection.push({
            amenitieID: 2,
            amenitieName: "Parque",
            amenitieDescription: ""
        });

        
        this.amenitiesCollection.push({
            amenitieID: 3,
            amenitieName: "Canchas",
            amenitieDescription: ""
        });

        
        this.amenitiesCollection.push({
            amenitieID: 4,
            amenitieName: "Terraza",
            amenitieDescription: ""
        });

        return this.amenitiesCollection;
    }
}