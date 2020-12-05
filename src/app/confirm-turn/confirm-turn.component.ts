import { Component, OnInit } from '@angular/core';
import { OptionalTurns } from '../optional-turns.service';
import { OptionalTurn } from '../optional-turn.service';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-turn',
  templateUrl: './confirm-turn.component.html',
  styleUrls: ['./confirm-turn.component.scss'],
})

export class ConfirmTurnComponent implements OnInit {

  apiUri = "/ImmediateTurns"
  turns: any[];
  turn: any;
  preAlert: number = 2;

  constructor(private router: Router, private optionalTurns: OptionalTurns, private http: HttpClient, private optionalTurn: OptionalTurn) { 
    if (this.optionalTurns.optionalTurns && this.optionalTurns.optionalTurns.length == 0 ||
      this.optionalTurn.optionalTurn && this.optionalTurn.optionalTurn.EstimatedHour == "00:00:00")
        this.router.navigate(['/no-turns'])
  }

  ngOnInit() {
    
    this.turn = this.optionalTurn.optionalTurn;
    this.turns = this.optionalTurns.optionalTurns;
    console.log("turns", this.turns);
    console.log("turn", this.turn);


  }

  plus() {
    this.preAlert++;
  }
  minus() {
    this.preAlert--;
  }
  confirmTurn(turn: any) {
    debugger;
    console.log(this.preAlert);
    console.log("turn:" + turn);
    this.http.put(environment.apiUrl + this.apiUri, { TurnId: turn.TurnId, PreAlert: this.preAlert })
      .subscribe((verificationCode => {
        this.router.navigate(['/process-complete']);
        console.log(verificationCode);
        this.optionalTurn.verificationCode = verificationCode;
        this.optionalTurn.selectedTurn = turn;
      }))
  }
}
