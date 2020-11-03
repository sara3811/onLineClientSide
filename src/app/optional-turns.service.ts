import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class OptionalTurns {

  apiUri = "/immediateTurns";
  optionalTurns: any;
  verificationCode:any;

  constructor(private http: HttpClient) { }

  loadOptionalTurns(categoryId, latitude, longitude, mode): Observable<any> {
    latitude = 32.109333;
    longitude = 34.855499;
    return this.http.get<any>(environment.apiUrl + this.apiUri,
       { params: { categoryId: categoryId, latitude: latitude, longitude: longitude, isDriving: mode } })

  }

  

}