import { Component, OnInit, Input } from '@angular/core';
import { Offer } from '../offers-menu.model';

@Component({
  selector: 'app-offers-detail',
  templateUrl: './offers-detail.component.html',
  styleUrls: ['./offers-detail.component.css'],
})
export class OffersDetailComponent implements OnInit {
  randomRate = (Math.random() + 4).toFixed(1);
  quanlityPeople = Math.floor(Math.random() * 100 + 1);
  @Input() offer: Offer;

  constructor() {}

  ngOnInit() {}
}
