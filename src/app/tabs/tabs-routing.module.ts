import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { ConfirmTurnComponent } from '../confirm-turn/confirm-turn.component';
import { ImmediateTurnDetailsComponent } from '../immediate-turn-details/immediate-turn-details.component';
import { NoTurnsComponent } from '../no-turns/no-turns.component';
import { MakeAppointmentPage } from '../make-appointment/make-appointment.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          },
          {
            path: 'makeAppointment',
            component: MakeAppointmentPage
          },
          { path: 'immediateTurn',
           component: ImmediateTurnDetailsComponent },
          
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      
    ],
  },
  //{ path: 'immediateTurn', component: ImmediateTurnDetailsComponent },
  { path: 'confirmTurn', component: ConfirmTurnComponent },
  { path: 'no-turns', component: NoTurnsComponent, 
  children: [
    {
      path: 'makeAppointment',
      component: MakeAppointmentPage
    },
  ]
},
  // {path :'makeAppointment',component:MakeAppointmentPage},

  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
