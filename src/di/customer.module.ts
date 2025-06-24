import { NgModule } from '@angular/core';
import { CustomerComponent } from './customer/customer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerService } from './customer.service';

@NgModule({
    
    imports: [ CommonModule, FormsModule  ],
    exports: [CustomerComponent  ],
    declarations: [CustomerComponent],
    providers: [CustomerService],
})
export class CustomerModule {}