
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControlPanelComponent } from './control-panel.component';
import { WelcomeControlPanelComponent } from './welcome-control-panel/welcome-control-panel.component';
import { RegistersComponent } from './registers/registers.component';

const CPANEL_ROUTES: Routes = [
  { path: '', component: ControlPanelComponent, children: [
    { path: '', component: WelcomeControlPanelComponent },
    { path: 'registers', component: RegistersComponent },
    { path: 'reservations', data: {title: 'Reservas'}, loadChildren: './reservations/reservations.module#ReservationsModule'},
    { path: 'spaces', data: {title: 'Espaços'} , loadChildren: './spaces/spaces.module#SpacesModule'}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(CPANEL_ROUTES)],
  exports: [RouterModule]
})
export class ControlPanelRoutingModule {

}
