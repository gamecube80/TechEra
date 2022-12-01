import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class Customer {

  customerNo: number = 0;
  name: string = "";
  address: string = "";
  city: string = "";
  state: string = "";
  country: string = "";

}
