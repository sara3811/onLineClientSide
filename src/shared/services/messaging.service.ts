import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { BehaviorSubject, Observable } from 'rxjs'
@Injectable()
export class MessagingService {
  currentMessage = new BehaviorSubject(null);
  constructor(private angularFireMessaging: AngularFireMessaging) {
  //   this.angularFireMessaging.messaging.subscribe(
  //     (_messaging) => {
  //       _messaging.onMessage = _messaging.onMessage.bind(_messaging);
  //       _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
  //     }
  //   )
 
  }
  /*requestPermission() {
    
    this.angularFireMessaging.requestToken.subscribe(
      (token) => {
        //יש לשמור את הטוקן במסד הנתונים 
       debugger;
        console.log(token);
        
        
        //console.log(this.currentMessage);
        //debugger;
      },
      =
    );
  
  }*/
  requestPermission(): Observable<string> {
    return this.angularFireMessaging.requestToken;
  }
  receiveMessage() {
    this.angularFireMessaging.messages.subscribe(
      (payload) => {
        console.log("new message received. ", payload);
        this.currentMessage.next(payload);
      },
      (err) => {
        debugger;
        console.error('error', err);
      })
  }
}