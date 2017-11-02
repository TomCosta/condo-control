
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControlPanelComponent } from './control-panel.component';
import { WelcomeControlPanelComponent } from './welcome-control-panel/welcome-control-panel.component';

const CPANEL_ROUTES: Routes = [
  { path: '', component: ControlPanelComponent, children: [
    { path: '', component: WelcomeControlPanelComponent },
    { path: 'reservations', loadChildren: './reservations/reservations.module#ReservationsModule'}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(CPANEL_ROUTES)],
  exports: [RouterModule]
})
export class ControlPanelRoutingModule {

}
