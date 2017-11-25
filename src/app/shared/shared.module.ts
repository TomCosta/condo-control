
import { NgModule } from '@angular/core';

import { NgbPopoverModule, NgbModalModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    NgbPopoverModule,
    // NgbModalModule,
    NgbProgressbarModule

  ],
  exports: [
    NgbPopoverModule,
    NgbModalModule,
    NgbProgressbarModule
  ]
})
export class SharedModule {}
