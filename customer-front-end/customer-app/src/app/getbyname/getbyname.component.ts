import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customerservice';

@Component({
  selector: 'app-getbyname',
  templateUrl: './getbyname.component.html',
  styleUrls: ['./getbyname.component.css']
})
export class GetbynameComponent {

  customer:Customer;

  constructor(private route:ActivatedRoute, private service:CustomerService) { 
    let observable=route.paramMap;
    observable.subscribe((params:ParamMap)=>{
      let codeVal:string=params.get("name");
      let cName:string=String(codeVal);
      console.log("name is "+cName);
        this.getCustomerByName(cName);
  })
  }

  getCustomerByName(name:string){
    let observable:Observable<Customer>=this.service.getCustomerByName(name);
  observable.subscribe( customerArg=>{this.customer=customerArg});
  }

  getbyname(form:any){
    let data=form.value;
    let name=data.name;
    this.getCustomerByName(name);
  }


  }



