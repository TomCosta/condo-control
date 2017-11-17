import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SpacesWelcomeComponent } from './spaces-welcome/spaces-welcome.component';
import { SpaceEditComponent } from './space-edit/space-edit.component';
import { SpacesListComponent } from './spaces-list/spaces-list.component';
import { SpaceDetailComponent } from './space-detail/space-detail.component';
import { SpacesComponent } from './spaces.component';
import { SpacesRoutingModule } from './spaces-routing.module';
import { SpaceItemComponent } from '../spaces/spaces-list/space-item/space-item.component';
import { spacesReducers } from './store/spaces.reducers';
import { SpacesEffects } from './store/spaces.effects';
import { SpacesService } from './store/spaces.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SpacesRoutingModule,
    StoreModule.forFeature('spaces', spacesReducers),
    EffectsModule.forFeature([SpacesEffects])
  ],
  declarations: [
    SpacesComponent,
    SpaceDetailComponent,
    SpacesListComponent,
    SpaceEditComponent,
    SpacesWelcomeComponent,
    SpaceItemComponent
  ],
  providers: [SpacesService]
})

export class SpacesModule {}
