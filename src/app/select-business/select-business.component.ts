import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IonicSelectableComponent } from 'ionic-selectable';


@Component({
  selector: 'app-select-business',
  templateUrl: './select-business.component.html',
  styleUrls: ['./select-business.component.scss'],
})

export class SelectBusinessComponent implements OnInit {

  @Input() isAdvanceTurn: any;
  @Output() outputService = new EventEmitter<any>();
  Businesses: any[];
  selectedBusiness: any;
  apiUri = '/businesses';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadBusinesses();
  }

  loadBusinesses() {
    this.http.get(environment.apiUrl + this.apiUri).subscribe((businesses: any[]) => {
      this.Businesses = businesses;
      console.log('businesses', this.Businesses);
      if (this.isAdvanceTurn == 1)
      this.Businesses = this.Businesses.filter(b => b.Services.find(s=>s.KindOfPermission == true));
    });
    
  }

  dataChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('selectedBusiness:', this.selectedBusiness);
    if (this.selectedBusiness.Services.length == 1) {
      this.outputService.emit(this.selectedBusiness.Services[0]);
    }
  }
  buttonClick(selectedService: any) {
    this.outputService.emit(selectedService);
  }
}
