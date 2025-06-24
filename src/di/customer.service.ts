import { Injectable } from "@angular/core";
import { Customer } from "./customer/customer";

interface ILogger{
    logMsg(msg:string): void;
}

@Injectable()
export class CustomerService implements ILogger {
    logMsg(msg: string): void {
        console.log("CustomerService logMsg:", msg);
        // throw new Error("Method not implemented.");
    }
    getCustomer(id:number): Customer {

        this.logMsg(`Someone Called getCustomer with id: ${id}`);
        return new Customer(1001, "John Doe", "New York");

    }



}