import { Component, OnInit } from '@angular/core';
import { OptionalTurns } from '../optional-turns.service';
import { OptionalTurn } from '../optional-turn.service';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

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

  constructor(private router: Router, private optionalTurns: OptionalTurns, private http: HttpClient, private optionalTurn: OptionalTurn, public alertController: AlertController) {
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

    console.log(this.preAlert);
    console.log("turn:" + turn);
    this.http.put(environment.apiUrl + this.apiUri, { TurnId: turn.TurnId, PreAlert: this.preAlert })
      .subscribe((confirmResponse: any) => {
        console.log(confirmResponse.verificationCode);
        this.optionalTurn.verificationCode = confirmResponse.verificationCode;
        this.optionalTurn.selectedTurn = turn;
        if (confirmResponse.isConflict == true) {
          this.presentAlertConfirm("יש לך כבר תור בשעה זו", confirmResponse.turnId)
        }
        else
          this.router.navigate(['/process-complete']);

      })
  }

  cancelTurn(turnId: any) {
    console.log(turnId);
    this.http.delete(environment.apiUrl + '/CustomersInTurn', { params: { turnId: turnId } })
      .subscribe((state => {
        console.log("state:", state);
        this.router.navigate(['/tabs/tab1']);
      }))
  }

  async presentAlertConfirm(text, turnId) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'שים לב!',
      message: '<strong>' + text + '</strong>!!!',
      buttons: [
        {
          text: 'בטל',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
            this.cancelTurn(turnId);
          }
        }, {
          text: 'אשר',
          handler: () => {
            console.log('Confirm Okay');
            this.router.navigate(['/process-complete']);
          }
        }
      ]
    });

    await alert.present();
  }
}
