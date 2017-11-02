import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservationsComponent } from './reservations.component';
import { ReservationsWelcomeComponent } from './reservations-welcome/reservations-welcome.component';
import { ReservationDetailComponent } from './reservation-detail/reservation-detail.component';
import { ReservationEditComponent } from './reservation-edit/reservation-edit.component';

const RESERVATIONS_ROUTES: Routes = [
  { path: '', component: ReservationsComponent, children: [
    { path: '', component: ReservationsWelcomeComponent },
    { path: 'new', component: ReservationEditComponent },
    { path: ':id', component: ReservationDetailComponent },
    { path: ':id/edit', component: ReservationEditComponent }
  ] },

];

@NgModule({
  imports: [
    RouterModule.forChild(RESERVATIONS_ROUTES)
  ],
  exports: [RouterModule],
  providers: []
})
export class ReservationsRoutingModule {}
