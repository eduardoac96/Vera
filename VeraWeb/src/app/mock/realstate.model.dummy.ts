import { RealStateModel } from "../models/realstate/realstate.model";

export class RealStateModelDummy{
    
    private realStateCollection: RealStateModel[] = [];

     constructor() { }

    getRealState(){
     
        this.realStateCollection.push(new RealStateModel());
        this.realStateCollection.push(new RealStateModel());
        this.realStateCollection.push(new RealStateModel());
        this.realStateCollection.push(new RealStateModel());

        return this.realStateCollection;
    }
}