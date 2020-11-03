import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcessCompletePage } from './process-complete.page';

const routes: Routes = [
  {
    path: '',
    component: ProcessCompletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcessCompletePageRoutingModule {}
