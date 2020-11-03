import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeAppointmentPageRoutingModule } from './make-appointment-routing.module';

import { MakeAppointmentPage } from './make-appointment.page';
//mport { RouterModule } from '@angular/router';
//import { SelectBusinessComponent } from '../select-business/select-business.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakeAppointmentPageRoutingModule
  ],
  declarations: [MakeAppointmentPage]
})
export class MakeAppointmentPageModule {}
