import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { debug } from 'util';

@Component({
  selector: 'app-show-turn',
  templateUrl: './show-turn.component.html',
  styleUrls: ['./show-turn.component.scss'],
})
export class ShowTurnComponent implements OnInit {
  myTurns: any[]
  apiUri = '/CustomersInTurn'
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadTurns();
  }

  loadTurns() {
    this.http.get(environment.apiUrl + this.apiUri).subscribe((turns: any[]) => {
      this.myTurns = turns;
      console.log('turns:', this.myTurns);
    })
  }

  cancelTurn(turnId: any) {
    console.log(turnId);
    this.http.delete(environment.apiUrl + this.apiUri,{ params: { turnId: turnId} })
    .subscribe((state => {
      this.loadTurns();
      console.log("state:" , state);
    }))
  }

}
