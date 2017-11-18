import { NgModule } from '@angular/core';
import { SpacesComponent } from './spaces.component';
import { SpacesListComponent } from './spaces-list/spaces-list.component';
import { RouterModule, Routes } from '@angular/router';

const SPACES_ROUTE: Routes = [
  { path: '', component: SpacesComponent, children: [
    { path: '', component: SpacesListComponent }
  ] },

];

@NgModule({
  imports: [
    RouterModule.forChild(SPACES_ROUTE)
  ],
  exports: [RouterModule]
})

export class SpacesRoutingModule {}
