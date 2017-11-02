import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationsWelcomeComponent } from './reservations-welcome/reservations-welcome.component';
import { ReservationDetailComponent } from './reservation-detail/reservation-detail.component';
import { ReservationItemComponent } from './reservation-list/reservation-item/reservation-item.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { ReservationEditComponent } from './reservation-edit/reservation-edit.component';
import { ReservationsComponent } from './reservations.component';
import { ReservationsRoutingModule } from './reservations-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReservationsRoutingModule
],
  declarations: [
    ReservationsComponent,
    ReservationDetailComponent,
    ReservationEditComponent,
    ReservationListComponent,
    ReservationItemComponent,
    ReservationsWelcomeComponent
  ]
})
export class ReservationsModule { }
