import { Component, OnInit } from '@angular/core';
import { StockService } from './stock.service';

@Component({
  template: `
    <div class="container bg-dark text-white p-3">
      <marquee>Dynamic Stock {{ invoke() }}</marquee>
      <h1>Dynamic Stock</h1>
      <button (click)="invoke()">Invoke</button>
    </div>
  `,
})
export class DynamicStockComponent implements OnInit {
  constructor(private stockService: StockService) {}

  invoke() {
    return this.stockService.getStock('Evoke Technologies');
  }
  ngOnInit() {}
}
