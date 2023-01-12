import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';




@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  categories :any
  object :any
  products :any
  category !:string
  pasteProducts: any;
  cartProduct:any[]=[]
  constructor(
    private http :HttpClient,
    private service :CategoryService,
    private route :ActivatedRoute,
    private router :Router,
  
  ) { }

  ngOnInit(): void {
    this.getAllProducts()
    this.getCategories()
    this.route.queryParams.subscribe(res=>{
      if(res['category']){
        this.getCategoryQuery(res['category'])
      }
    })
  }

getAllProducts(){
  this.http.get('https://dummyjson.com/products').subscribe(res=>{
    this.object =res
    this.products =this.object.products
    this.pasteProducts =this.object.products

  })

}

getCategories(){
  this.service.getCategory().subscribe(res=>{
    this.categories=res
  })
}

getCategoryQuery(category :string){
  this.http.get('https://dummyjson.com/products/category/'+category).subscribe(res=>{
    this.object =res
    this.products =this.object.products
    
  })
}

addToCart(item :any){

  if(localStorage.getItem('token')){
  this.cartProduct.push(item)
  localStorage.setItem('cart',JSON.stringify(this.cartProduct))
}
else{
  this.router.navigate(['./login'])
}
}

}
