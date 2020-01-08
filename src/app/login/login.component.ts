import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='anurag'
  password='hello'
  errorMessage='invalid credentials'
  invalidLogin= false

  //Router
  //Dependency Injection
 constructor(private router: Router) { }

  ngOnInit() {
  }
  handleLogin(){

    if(this.username==='anurag' && this.password==='hello')
    {
    this.invalidLogin=false
    console.log(this.username)
    console.log(this.password)

    //Redirect to welcome page
     this.router.navigate(['welcome/:name'])
     this.router.navigate(['welcome',this.username])
  }
    else{
      this.invalidLogin=true
    }
  }

}
