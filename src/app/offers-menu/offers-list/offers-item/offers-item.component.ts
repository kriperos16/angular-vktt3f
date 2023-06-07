import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Offer } from '../../offers-menu.model';

@Component({
  selector: 'app-offers-item',
  templateUrl: './offers-item.component.html',
  styleUrls: ['./offers-item.component.css'],
})
export class OffersItemComponent implements OnInit {
  randomRate = (Math.random() + 4).toFixed(1);
  @Input() offer: Offer;
  @Output() offerSelected = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  onSelected() {
    this.offerSelected.emit();
  }
}
