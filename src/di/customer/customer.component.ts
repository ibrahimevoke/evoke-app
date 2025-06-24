import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer: any

  constructor(private cs: CustomerService) { }

  ngOnInit(): void {
    // Call getCustomer and assign the result to this.customer
    this.customer = this.cs.getCustomer(1001)
  }
}



// life time of a service
// 1. Component level
// 2. Module level
// 3. Global level