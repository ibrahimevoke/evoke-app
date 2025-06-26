import { NgModule } from "@angular/core";
import { PriceQuoterComponent, StockComponent,NotifierComponent } from "./dataflow";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [StockComponent],
    declarations: [PriceQuoterComponent,StockComponent,NotifierComponent],
    providers: [],
})
export class DataflowModule {}

