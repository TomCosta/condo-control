import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SpacesListComponent } from './spaces-list/spaces-list.component';
import { SpacesComponent } from './spaces.component';
import { SpacesRoutingModule } from './spaces-routing.module';
import { SpaceItemComponent } from '../spaces/spaces-list/space-item/space-item.component';
import { spacesReducers } from './store/spaces.reducers';
import { SpacesEffects } from './store/spaces.effects';
import { SpacesService } from './spaces.service';
import { UploadService } from '../shared/upload/upload.service';
import { SharedModule } from '../../shared/shared.module';
import { SpacesDirective } from './spaces.directive';
// import { SpacesDirective } from './spaces.directive';


@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    CommonModule,
    SpacesRoutingModule,
    StoreModule.forFeature('spaces', spacesReducers),
    EffectsModule.forFeature([SpacesEffects])
    // SpacesDirective
  ],
  declarations: [
    SpacesComponent,
    SpacesListComponent,
    SpaceItemComponent
  ],
  providers: [SpacesService, UploadService]
})

export class SpacesModule {}
