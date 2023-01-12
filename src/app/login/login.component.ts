import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm !:FormGroup
  loader = false
  error !:boolean
  Auth :any
    constructor(
      private fb:FormBuilder,
      private http:HttpClient,
      private router:Router,
      
      
      ) { }
  
    ngOnInit(): void {
      this.createForm()
  
    }
  createForm(){
    this.loginForm = this.fb.group({
      username:['',[Validators.required]],
      password:['',Validators.required]
    })
  }

  login(){
    const model = {
      username:this.loginForm.value.username,
      password:this.loginForm.value.password,
    }
    this.http.post('https://dummyjson.com/auth/login',model).subscribe(res=>{
      this.loader = true
      this.router.navigate(['./'])
      this.Auth =res
       localStorage.setItem('username',this.loginForm.value.username)
       localStorage.setItem('token',this.Auth.token)

      },
      error=>{
        alert('Please enter a valid information')
      })

  }

}
