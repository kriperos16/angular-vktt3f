import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Offer } from '../offers-menu.model';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css'],
})
export class OffersListComponent implements OnInit {
  @Output() offerWasSelected = new EventEmitter<Offer>();
  qualityOffer = 2;
  offers: Offer[] = [
    new Offer(
      'Hotel Magna Graecia',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFfdJ5JWrJQCSLml5-tiIqw4cQ4jH4KPTQpAGy9uUSO2N9W2GhwqyLbQQAaUNryewmbIc&usqp=CAU',
      'Grecja/Korfu/Dassia',
      'Hotel wypoczynkowy w Grecji',
      2599,
      'Może pózniej to zrobię'
    ),
    new Offer(
      'Hotel Chrispy Hotel Resort',
      'https://dcontent.inviacdn.net/shared/img/web-800x600/2020/6/11/d3/26193108-chrispy-waterpark-world.jpg',
      'Grecja/Kreta/Rapaniana',
      'Hotel wypoczynkowy w Grecji',
      2899,
      'Moze pozniej to zrobie :)'
    ),
  ];

  constructor() {}

  ngOnInit() {}

  onOfferSelected(offer: Offer) {
    this.offerWasSelected.emit(offer);
  }
}
