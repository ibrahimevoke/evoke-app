import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { DataflowModule } from "./dataflow.module";

// this interface is used to define the structure of a price quote
interface IPriceQuote{
    stockSymbol: string;
    lastPrice: number;
}

// Parrent component for managing stock data flow
@Component({
  selector: "app-stock",
    template:`
    <div class="bg-primary text-light p-3">
          <h3> Parent Component Received: {{stockSymbol}} -- {{price | currency :'USD':'symbol':'1.2-2'}} </h3>
      
          <price-quoter (lastPriceEvent)="handler($event)"></price-quoter>
          <notifier [info]="stockInfo"></notifier> 
    </div>
  `,
})

export class StockComponent implements OnInit {
  stockSymbol: string = "";
  price: number = 0;
  stockInfo: IPriceQuote = {
    stockSymbol: "",
    lastPrice: 0
  };

  handler(event: IPriceQuote): void {
    this.stockSymbol = event.stockSymbol;
    this.price = event.lastPrice;
    this.stockInfo = event;
    console.log("Received stock data:", this.stockInfo);
  }
  constructor() {
    // Initialization logic can go here
  }
  ngOnInit(): void {   
  }
}  



//<<==============================
// CHild1 component for managing stock data flow
@Component({
  selector: "price-quoter",
    template:`
    <div class="dataflow-container bg-info">
        <h1>Price Quoter</h1>
        <h3 class="bg-info"> Recevied : {{company}} - {{price | currency:'USD':'symbol':'1.2-2'}}</h3>
        <p>This Price component is responsible for managing the data flow in the application.</p>
    </div>
  `,
})
export class PriceQuoterComponent implements OnInit {
    company:string="Evoke Technologies";
     price:number = 0;
    @Output()
     lastPriceEvent:EventEmitter<IPriceQuote> = new EventEmitter();

   constructor() {
    // Initialization logic can go here
    window.setInterval(() => {
     let priceQuote:IPriceQuote = {
        stockSymbol: this.company,
        lastPrice: Math.random() * 100,
     }
     this.price = priceQuote.lastPrice;
     this.lastPriceEvent.emit(priceQuote);
    }, 1000);
  }
  ngOnInit(): void {   
  }
}




//<<==============================
// CHild2 component for managing stock data flow
@Component({
  selector: "notifier",
    template:`
    <div class="dataflow-container bg-warning">

          <h1>Notifier Management</h1>
        <h3 class="bg-warning"> Recevied : {{info.stockSymbol}} - {{info.lastPrice | currency:'USD':'symbol':'1.2-2'}}</h3>
  
        <p>This notifier component is responsible for managing the data flow in the application.</p>
    </div>
  `,
})
export class NotifierComponent implements OnInit {
    @Input()
    info: IPriceQuote = {
        stockSymbol: "",
        lastPrice: 0
    };
   constructor() {
    // Initialization logic can go here
  }
  ngOnInit(): void {   
  }
}