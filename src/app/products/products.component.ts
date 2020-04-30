import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  message:string;
products;
  constructor(private productService:ProductService,private router:Router) {
    this.getProducts();
   }
   getProducts(){
     this.productService.getData().subscribe(response=>{
       console.log(response);
       this.products=response.products;
     },error=>{
       console.log(error);
     });
   }
   deleteProduct(product){
     this.productService.deleteData(product).subscribe(response=>{
       console.log(response);
       if(response.error){
         this.message='failed to delete the product'
       }else{
         this.message='Product deleted successfully'
       }
     }
     )
     setTimeout(() => {
      this.message = null;
    }, 5000);

    this.getProducts();
   }
  ngOnInit(): void {
  }

}
