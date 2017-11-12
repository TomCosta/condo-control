import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FullBodyComponent } from './core/full-body/full-body.component';
import { FooterComponent } from './core/footer/footer.component';
import { ExploreComponent } from './core/full-body/explore/explore.component';
import { ContactComponent } from './core/full-body/contact/contact.component';
import { HomeComponent } from './core/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FullBodyComponent,
    FooterComponent,
    ExploreComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CommonModule,
    StoreModule.forRoot({}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
