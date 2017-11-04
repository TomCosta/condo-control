
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControlPanelComponent } from './control-panel/control-panel.component';
import { AppComponent } from './app.component';
import { FullBodyComponent } from './core/full-body/full-body.component';
import { HomeComponent } from './core/home/home.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'control-panel', loadChildren: './control-panel/control-panel.module#ControlPanelModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
