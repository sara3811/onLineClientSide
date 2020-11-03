import { Component, OnInit } from '@angular/core';
import { OptionalTurn } from '../optional-turn.service';
import { BookAppointment } from '../bookAppointment.service';

@Component({
  selector: 'app-process-complete',
  templateUrl: './process-complete.page.html',
  styleUrls: ['./process-complete.page.scss'],
})
export class ProcessCompletePage implements OnInit {
  verificationCode: any;
  turn: any;

  constructor(private optionalTurn: OptionalTurn, private appointmemt: BookAppointment) { }

  ngOnInit() {
    if (this.optionalTurn.verificationCode == null) {
      this.verificationCode = this.appointmemt.verificationCode;
      this.turn = this.appointmemt.selectedTurn;
    }
    else {
      this.verificationCode = this.optionalTurn.verificationCode;
      this.turn = this.optionalTurn.selectedTurn;
    }
    console.log('turn',this.turn);
  }

}
