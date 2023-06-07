import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainMenuComponent } from './main-menu/main-menu.component';
import { OffersMenuComponent } from './offers-menu/offers-menu.component';
import { OffersDetailComponent } from './offers-menu/offers-detail/offers-detail.component';
import { OffersEditComponent } from './offers-menu/offers-edit/offers-edit.component';
import { OffersStartComponent } from './offers-menu/offers-start/offers-start.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', component: MainMenuComponent },
  {
    path: 'offers-menu',
    component: OffersMenuComponent,
    children: [
      { path: '', component: OffersStartComponent },
      { path: ':id', component: OffersDetailComponent },
    ],
  },
  { path: 'add-offers', component: OffersEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
