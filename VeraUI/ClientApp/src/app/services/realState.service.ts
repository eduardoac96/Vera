import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RealStateService {
  constructor(private http: HttpClient) { }
   

  private apiURL: string = 'https://localhost:44309/api/RealState/GetRealStateTypes';

  getRealStateData() {
     
    return this.http.get(this.apiURL);

  }
}
