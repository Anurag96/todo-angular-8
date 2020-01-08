import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='anurag'
  password=''
  errorMessage='invalid credentials'
  invalidLogin= false
  constructor() { }

  ngOnInit() {
  }
  handleLogin(){

    if(this.username==='anurag' && this.password==='hello')
    {
    this.invalidLogin=false
    console.log(this.username)
    console.log(this.password)
    }
    else{
      this.invalidLogin=true
    }
  }

}
