import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeControlPanelComponent } from './welcome-control-panel/welcome-control-panel.component';
import { ControlPanelRoutingModule } from './control-panel-routing.module';
import { ControlPanelComponent } from './control-panel.component';
import { RegistersComponent } from './registers/registers.component';

@NgModule({
  declarations: [
    ControlPanelComponent,
    WelcomeControlPanelComponent,
    RegistersComponent
  ],
  imports: [
    CommonModule,
    ControlPanelRoutingModule
  ]
})

export class ControlPanelModule {
}
