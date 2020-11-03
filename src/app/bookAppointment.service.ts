import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';


@Injectable({
    providedIn: 'root'
})

export class BookAppointment {
    apiUri = "/advanceTurns";
    days: any;
    verificationCode: any;
    selectedTurn: any;
    constructor(private http: HttpClient) { }


    loadDays(serviceId): Observable<any> {
        return this.http.get<any>(environment.apiUrl+this.apiUri,
            { params: { serviceId: serviceId } })
    }

    loadHoursPerDay(serviceId, day): Observable<any> {
        return this.http.get<any>(environment.apiUrl+this.apiUri,
            { params: { serviceId: serviceId, day: day } })
    }

    makeAppointment(turn): Observable<any> {
        this.selectedTurn = turn;
        return this.http.post<any>(environment.apiUrl+this.apiUri, turn)
    }
}