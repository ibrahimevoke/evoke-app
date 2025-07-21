import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StockService {
  constructor() {}

  getStock(stockSymbol: string) {
    return `FOr ${stockSymbol} stock, the price is $343.34`;
  }
}
