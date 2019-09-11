import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss']
})
export class StockItemComponent implements OnInit {


  @Input() public stock: Stock;
  @Output() private toggleFavorite: EventEmitter<Stock>;

  constructor() {
    this.toggleFavorite = new EventEmitter<Stock>();
  }

  ngOnInit() {}

  onToggleFavorite(event) {
    this.toggleFavorite.emit(this.stock);
    // this.stock.favorite = !this.stock.favorite;
  }
}
