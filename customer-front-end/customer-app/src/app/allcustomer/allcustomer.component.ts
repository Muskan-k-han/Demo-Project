import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customerservice';

@Component({
  selector: 'app-allcustomer',
  templateUrl: './allcustomer.component.html',
  styleUrls: ['./allcustomer.component.css']
})
export class AllcustomerComponent implements OnInit {

  customers:Customer[];

  constructor(private service:CustomerService) {
    let observable:Observable<Customer[]>=service.getAll();
    observable.subscribe( customerArg=>{
      this.customers=customerArg;
    });
   }

  ngOnInit(): void {
  }

}