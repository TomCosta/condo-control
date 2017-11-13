import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnnouncementsComponent } from './announcements.component';
import { AnnouncementListComponent } from './announcement-list/announcement-list.component';
import { AnnouncementEditComponent } from './announcement-edit/announcement-edit.component';
import { AnnouncementDetailComponent } from './announcement-detail/announcement-detail.component';

const ANNOUNCEMENTS_ROUTES: Routes = [
  { path: '', component: AnnouncementsComponent, children: [
    { path: '', component: AnnouncementListComponent },
    { path: 'new', component: AnnouncementEditComponent },
    { path: ':id', component: AnnouncementDetailComponent },
    { path: ':id/edit', component: AnnouncementEditComponent }
  ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(ANNOUNCEMENTS_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})

export class AnnouncementsRoutingModule {}
