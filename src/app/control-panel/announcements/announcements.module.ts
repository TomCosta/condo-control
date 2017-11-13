import { NgModule } from '@angular/core';

import { AnnouncementsComponent } from './announcements.component';
import { AnnouncementEditComponent } from './announcement-edit/announcement-edit.component';
import { AnnouncementDetailComponent } from './announcement-detail/announcement-detail.component';
import { AnnouncementListComponent } from './announcement-list/announcement-list.component';
import { AnnouncementItemComponent } from './announcement-list/announcement-item/announcement-item.component';
import { AnnouncementsRoutingModule } from './announcements-routing.module';


@NgModule({
  imports: [
    AnnouncementsRoutingModule
],
  declarations: [
    AnnouncementsComponent,
    AnnouncementEditComponent,
    AnnouncementDetailComponent,
    AnnouncementListComponent,
    AnnouncementItemComponent
  ]
})

export class AnnouncementsModule {

}
