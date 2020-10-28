import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customerservice';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {

  constructor(private service:CustomerService) { }

  ngOnInit(): void {
  }
  customer:Customer;

  addCustomer(form:any){
    let data=form.value;
    let name=data.name;
    
    this.customer=new Customer(-1,name);
    let successFun = (customerArg: Customer) => {
      this.customer = customerArg;
    };

    let errFun = err => {
      console.log("err in addusercomponent " + err.message);
    }

    let observable: Observable<Customer> = this.service.addCustomer(this.customer);
    observable.subscribe(successFun, errFun);
  }

}