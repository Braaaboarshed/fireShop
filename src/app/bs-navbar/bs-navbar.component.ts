import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  username:any
  showBadge!: boolean;
  cardProducts: any[]=[];
  itemsNumber !:number
  constructor() { }

  ngOnInit(): void {
    this.cartCounter()
    this.username =localStorage.getItem('username')
  }

  logout(){
    localStorage.clear()
   

}    

cartCounter(){
if( JSON.parse(localStorage.getItem("cart")!)){
  this.showBadge =true
  this.cardProducts =JSON.parse(localStorage.getItem("cart")!)
   this.itemsNumber=this.cardProducts.length
}


}
}