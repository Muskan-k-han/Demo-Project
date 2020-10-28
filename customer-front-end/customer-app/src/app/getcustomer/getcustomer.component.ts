import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customerservice';

@Component({
  selector: 'app-getcustomer',
  templateUrl: './getcustomer.component.html',
  styleUrls: ['./getcustomer.component.css']
})
export class GetcustomerComponent {

  customer:Customer;

  constructor(private route:ActivatedRoute, private service:CustomerService) { 
    let observable=route.paramMap;
    observable.subscribe((params:ParamMap)=>{
      let codeVal:string=params.get("customerId");
      let idNum:number=Number(codeVal);
        console.log("id available is "+idNum);
        this.getCustomerById(idNum);
  })
  }

  getCustomerById(customerId:number){
    let observable:Observable<Customer>=this.service.getCustomer(customerId);
  observable.subscribe( customerArg=>{this.customer=customerArg});
  }

  getcustomer(form:any){
    let data=form.value;
    let customerId=data.customerId;
    this.getCustomerById(customerId);
  }

  }



