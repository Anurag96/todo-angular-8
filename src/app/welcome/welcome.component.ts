//package com.anurag.anugular.demo

//import org.springframework.boot.SpringApplication;
import { Component, OnInit } from '@angular/core';
// import {AppComponent} from '../app.component'; 

//@ComponentScan(value="com.anurag.anugular.demo")
//@Component this is call decorator
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

//public class SpringBootFirstApplication implements SomeInterface{
export class WelcomeComponent implements OnInit {   //export acts public identifier

  message : string='Hello guys to this Welcome page' //defining the return type and defining a member variable
  //public SpringBootFirstApplication(){}
  constructor() { }

  //void init(){}
  ngOnInit(){  
  // this.message=5  this will give a compilation error
 
  //System.out.print
    console.log(this.message)
  }

}
