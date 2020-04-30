import { Component, OnInit,OnDestroy } from '@angular/core';
import { interval,Subscription, from } from 'rxjs';
import { NgForm }from '@angular/forms';
import { ProductService }from '../product.service';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit,OnDestroy {
  mySubscription:Subscription;
  constructor(private ProductService) {
   /* this.mySubscription=interval(1000).subscribe(data =>{
      console.log(data);
   });*/
  }
  postProduct(form:NgForm){
    this.ProductService.postData(form.value).subscribe(response=>{
      console.log(response);
    },error=>{
      console.log(error);
    });
  }
  ngOnInit(): void {
  }
  ngOnDestroy(){
    this.mySubscription.unsubscribe();
  }

}
