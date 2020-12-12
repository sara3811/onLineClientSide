import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { ShowTurnDetialsComponent } from '../show-turn-detials/show-turn-detials.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-show-turn',
  templateUrl: './show-turn.component.html',
  styleUrls: ['./show-turn.component.scss'],
})
export class ShowTurnComponent implements OnInit {
  myTurns: any[]
  apiUri = '/CustomersInTurn'
  constructor(private http: HttpClient,public actionSheetController: ActionSheetController,private datePipe: DatePipe) {
    this.loadTurns();

  }

  ngOnInit() {
  }
  async presentActionSheet(turn) {
    const actionSheet = await this.actionSheetController.create({
      header: 'פרטי התור-',
      
      cssClass: 'detials',
      
      buttons: [{
       
        text: turn.BusinessName+'    '+turn.Address,
        cssClass: 'onlyText',
        
      },
      {
        text: this.datePipe.transform(turn.FullTime, 'MMM d, y, h:mm:ss a'),
        cssClass: 'onlyText', 
      },
      {
        text: 'ראיתי',
        icon: 'close',
        role: 'cancel',
      
        handler: () => {
          console.log('Cancel clicked');
        
      }}]
    });
    await actionSheet.present();
  }
  showDetials(turn) {
   
    this.presentActionSheet(turn);
  }
  loadTurns() {
    this.http.get(environment.apiUrl + this.apiUri).subscribe((turns: any[]) => {
      this.myTurns = turns;
      console.log('turns:', this.myTurns);
    })
  }

  cancelTurn(turnId: any) {
    console.log(turnId);
    this.http.delete(environment.apiUrl + this.apiUri, { params: { turnId: turnId } })
      .subscribe((state => {
        this.loadTurns();
        console.log("state:", state);
      }))
  }

}
