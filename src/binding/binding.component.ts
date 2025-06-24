import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-binding", 
templateUrl: "./binding.component.html",
styles: [`
    h1 { color: darkblue; },
    p { font-size: 16px; color:rgb(216, 16, 16); },
    img { width: 1100px; height: auto; }
    `]
})

export class BindingComponent implements OnInit {
    username:string = "JohnDoe";
    title:string = "Data Binding Example";
    description:string = "This component demonstrates different types of data binding in Angular.";
    isActive:boolean = true;
    imageUrl = "https://angular.io/assets/images/logos/angular/angular.png";
    

    customers:any=[
        {id:101, name:"John",city:"Hyderabad", age:25},
        {id:102, name:"Jane",city:"Chennai", age:30},
        {id:103, name:"Doe",city:"Bangalore", age:28}
    ]
    //delete customer
    deleteCustomer(customer:any): void {
        console.log("Deleting customer:", customer);
        this.customers = this.customers.filter((c: { id: any; }) => c.id !== customer.id);
    }

    clicked:boolean= false;
    clickedItem:any = {name:"", city:""};
    onItemClick(customer:any): void {

        console.log("selected Customer clicked:", customer);
        this.clicked = true;
        this.clickedItem = customer;
    }
    trackByID(index:number, item:any): number {
        return item.id;
    }
    constructor() {}
    
    ngOnInit(): void {
        console.log("BindingComponent initialized");
    }
    
    toggleActive(): void {
        this.isActive = !this.isActive;
        console.log("isActive toggled to:", this.isActive);
    }
}