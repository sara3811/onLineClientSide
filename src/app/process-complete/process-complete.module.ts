import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcessCompletePageRoutingModule } from './process-complete-routing.module';

import { ProcessCompletePage } from './process-complete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcessCompletePageRoutingModule
  ],
  declarations: [ProcessCompletePage]
})
export class ProcessCompletePageModule {}
