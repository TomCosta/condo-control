import { NgModule } from '@angular/core';

import { MenuLeftComponent } from './menu-left/menu-left.component';
import { WelcomeControlPanelComponent } from './welcome-control-panel/welcome-control-panel.component';
import { ControlPanelRoutingModule } from './control-panel-routing.module';
import { ControlPanelComponent } from './control-panel.component';

@NgModule({
  declarations: [
    MenuLeftComponent,
    ControlPanelComponent,
    WelcomeControlPanelComponent
  ],
  imports: [
    ControlPanelRoutingModule
  ]
})

export class ControlPanelModule {

}
