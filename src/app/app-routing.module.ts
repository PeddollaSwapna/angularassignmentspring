import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { PostsComponent } from './posts/posts.component';


const routes: Routes = [
  {path:'products',component:ProductsComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'posts',component:PostsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
