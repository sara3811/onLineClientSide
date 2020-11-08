import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  myCustomIcon = "../../assets/logo.JPG";
  userName=localStorage.getItem("userName");
  constructor() {}

}
