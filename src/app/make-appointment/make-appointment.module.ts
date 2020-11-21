import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeAppointmentPageRoutingModule } from './make-appointment-routing.module';

import { MakeAppointmentPage } from './make-appointment.page';
//import { RouterModule } from '@angular/router';
import { SelectBusinessComponent } from '../select-business/select-business.component';
import { IonicSelectableModule } from 'ionic-selectable';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakeAppointmentPageRoutingModule,
    IonicSelectableModule,

  ],
  declarations: [MakeAppointmentPage,SelectBusinessComponent]
})
export class MakeAppointmentPageModule {}
