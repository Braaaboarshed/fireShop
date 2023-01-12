import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-update-page',
  templateUrl: './update-page.component.html',
  styleUrls: ['./update-page.component.css']
})
export class UpdatePageComponent implements OnInit {
  categories:any
  product:any
  updatedProduct:any ={}
    constructor(
      private service :CategoryService,
      private http :HttpClient,
      private router :Router,
      private route :ActivatedRoute
      ) { }
  
    ngOnInit(): void {
      this.getCategory()
      this.route.paramMap.subscribe(res=>{
        let id= res.get('id')
        if(id)
      this.getProductById(+id)
      }).unsubscribe()
    }
  
    getCategory(){
      this.service.getCategory().subscribe(res=>{
      this.categories =res
      })
    }
  
    save(product :any){
      if( !this.route.snapshot.paramMap.get('id')){
        
        this.http.post('https://dummyjson.com/products/add',product).subscribe(res=>{
          this.router.navigate(['/admin-products'])
        })
      }
    }
  
    getProductById(id :number){
     
          this.http.get('https://dummyjson.com/products/'+id).subscribe(res=>{
            this.product =res
            console.log(res)
          })
    }
  updateProduct(){
    let id =  this.route.snapshot.paramMap.get('id')
    if( id){
      this.updatedProduct=this.product
      this.http.put('https://dummyjson.com/products/'+id,this.updateProduct)
      this.router.navigate(['/admin-products'])
    }
    
  }
 

  
    
  }
  
