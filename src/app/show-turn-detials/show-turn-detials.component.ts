import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-show-turn-detials',
  templateUrl: './show-turn-detials.component.html',
  styleUrls: ['./show-turn-detials.component.scss'],
})
export class ShowTurnDetialsComponent implements OnInit {
  @Input() turn: any;
  text:string;
  constructor(private modalCtrl: ModalController,private datePipe: DatePipe) { }

  ngOnInit() {
    this.text= this.datePipe.transform(this.turn.FullTime, 'MMM d, y')
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
