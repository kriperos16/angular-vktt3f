import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './main-menu/search/search.component';
import { CarouselComponent } from './main-menu/carousel/carousel.component';
import { InfoComponent } from './main-menu/info/info.component';
import { NavigationFooterComponent } from './navigation-footer/navigation-footer.component';
import { SocialmediaPlatformlinksComponent } from './navigation-footer/socialmedia-platformlinks/socialmedia-platformlinks.component';
import { CommunicatefooterComponent } from './navigation-footer/communicatefooter/communicatefooter.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { AppRoutingModule } from './app-routing.module';
import { OffersMenuComponent } from './offers-menu/offers-menu.component';
import { OffersEditComponent } from './offers-menu/offers-edit/offers-edit.component';
import { OffersDetailComponent } from './offers-menu/offers-detail/offers-detail.component';
import { OffersListComponent } from './offers-menu/offers-list/offers-list.component';
import { OffersItemComponent } from './offers-menu/offers-list/offers-item/offers-item.component';
import { OffersStartComponent } from './offers-menu/offers-start/offers-start.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    CarouselComponent,
    InfoComponent,
    NavigationFooterComponent,
    SocialmediaPlatformlinksComponent,
    CommunicatefooterComponent,
    MainMenuComponent,
    OffersMenuComponent,
    OffersDetailComponent,
    OffersListComponent,
    OffersItemComponent,
    OffersEditComponent,
    OffersStartComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
