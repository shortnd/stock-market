import { Component, OnInit } from '@angular/core';

import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss']
})
export class StockItemComponent implements OnInit {

  public stock: Stock;
  public stockClasses;
  public stocks: Array<Stock>;

  constructor() { }

  ngOnInit() {

    this.stocks = [
      new Stock('Test Stock Company', 'TSC', 85, 80),
      new Stock('Second Stock Company', 'SSC', 10, 20),
      new Stock('Last Stock Company', 'LSC', 876, 765)
    ];

    // this.stock = new Stock(
    //   'Test Stock Company',
    //   'TSC',
    //   85,
    //   80,
    // );
    const diff = (this.stock.price / this.stock.previousPrice - 1);
    const largeChange = Math.abs(diff) > 0.01;
    this.stockClasses = {
      positive: this.stock.isPositiveChange(),
      negative: !this.stock.isPositiveChange(),
      'large-change': largeChange,
      'small-change': !largeChange
    }
  }

  toggleFavorite(event, index) {
    console.log('We are toggling the favorite state for this stock', index,event);
    this.stocks[index].favorite = !this.stocks[index].favorite;
  }

}
