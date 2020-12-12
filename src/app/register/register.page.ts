import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MessagingService } from 'src/shared/services/messaging.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  @ViewChild('userName', { static: false, read: ElementRef }) userName: ElementRef;
  @ViewChild('userPhone', { static: false, read: ElementRef }) userPhone: ElementRef;
  apiUri = '/users';
  message;
  notifactionToken;

  constructor(private http: HttpClient, private router: Router, private messagingService: MessagingService) {
    //  this.messagingService.requestPermission().subscribe(token => {
    //    this.notifactionToken = token; console.log(token)
    //  },
    //    (err) => {
    //     console.log('Unable to get permission to notify.', err);
    //   });
    this.messagingService.receiveMessage()
    this.message = this.messagingService.currentMessage
  }

  ngOnInit() {
  }

  async register() {
    try {
      //לא נכון לcath במקרה של חוסר הצלחה

      this.notifactionToken = await this.messagingService.requestPermission();
      
    }
    catch{
      
      console.log('Unable to get permission to notify.');
      
    }
    //this.notifactionToken = "0"
    let name = this.userName.nativeElement.value;
    let phone = this.userPhone.nativeElement.value;
    let token = this.notifactionToken;

    console.log('name:', name, '  phone:', phone,'token ',token);
    this.http.get(environment.apiUrl + this.apiUri, { params: { name, phone, token } })
      .subscribe((token: string) => {

        localStorage.setItem("user", token);
        localStorage.setItem("userName", name);

        console.log(token);
      })
  }
}
