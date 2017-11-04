import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpacesWelcomeComponent } from './spaces-welcome/spaces-welcome.component';
import { SpaceEditComponent } from './space-edit/space-edit.component';
import { SpacesListComponent } from './spaces-list/spaces-list.component';
import { SpaceDetailComponent } from './space-detail/space-detail.component';
import { SpacesComponent } from './spaces.component';
import { SpacesRoutingModule } from './spaces-routing.module';
import { SpaceItemComponent } from '../../spaces/spaces-list/space-item/space-item.component';

@NgModule({
  imports: [
    CommonModule,
    SpacesRoutingModule
  ],
  declarations: [
    SpacesComponent,
    SpaceDetailComponent,
    SpacesListComponent,
    SpaceEditComponent,
    SpacesWelcomeComponent,
    SpaceItemComponent
  ]
})

export class SpacesModule {}
