import { NgModule } from '@angular/core';
import { SpacesComponent } from './spaces.component';
import { SpacesListComponent } from './spaces-list/spaces-list.component';
import { SpaceEditComponent } from './space-edit/space-edit.component';
import { SpaceDetailComponent } from './space-detail/space-detail.component';
import { RouterModule, Routes } from '@angular/router';

const SPACES_ROUTE: Routes = [
  { path: '', component: SpacesComponent, children: [
    { path: '', component: SpacesListComponent },
    { path: 'new', component: SpaceEditComponent },
    // { path: ':id', component: SpaceDetailComponent },
    // { path: ':id/edit', component: SpaceEditComponent },
    { path: 'edit', component: SpaceEditComponent }
  ] },

];

@NgModule({
  imports: [
    RouterModule.forChild(SPACES_ROUTE)
  ],
  exports: [RouterModule]
})

export class SpacesRoutingModule {}
