import { Component } from '@angular/core';
import {Router} from '@angular/router'
//import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router:Router) {}
  immediateTurn()
  {
    this.router.navigate(['tabs/tab1/immediateTurn']);
  }
  MakeAppointment()
  {
    this.router.navigate(['tabs/tab1/makeAppointment']);
  }
}
