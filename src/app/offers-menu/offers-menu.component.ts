import { Component, OnInit } from '@angular/core';
import { Offer } from './offers-menu.model';

@Component({
  selector: 'app-offers-menu',
  templateUrl: './offers-menu.component.html',
  styleUrls: ['./offers-menu.component.css'],
})
export class OffersMenuComponent implements OnInit {
  selectedOffer: Offer;

  constructor() {}

  ngOnInit() {}
}
