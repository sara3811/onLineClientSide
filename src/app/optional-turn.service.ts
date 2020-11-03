import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';


@Injectable({
    providedIn: 'root'
})

export class OptionalTurn {

    apiUri = "/immediateTurns";
    optionalTurn: any;
    verificationCode:any;
    selectedTurn:any;
    constructor(private http: HttpClient) { }

    loadOptionalTurn(serviceId, latitude, longitude, mode): Observable<any> {
       // latitude = 32.109333;
       // longitude = 34.855499;
        console.log(mode);
        return this.http.get<any>(environment.apiUrl + this.apiUri,
            { params: { serviceId:serviceId, latitude: latitude, longitude: longitude, isDriving: mode } })
    }
}