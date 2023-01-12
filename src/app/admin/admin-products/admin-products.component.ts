import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
object:any
products :any
filteredProducts :any
  constructor(
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    this.getAllProducts()
  }
  getAllProducts(){
    this.http.get('https://dummyjson.com/products').subscribe(res=>{
      console.log(res)
      this.object =res
      this.products =  this.object.products
      this.filteredProducts=this.object.products
    })
  }
  filter(searchQuery :string){

    this.products=(searchQuery)?
    
     this.products.filter((item:any)=>item.title.toLowerCase().includes(searchQuery.toLocaleLowerCase()))
    :this.filteredProducts
  }
}
