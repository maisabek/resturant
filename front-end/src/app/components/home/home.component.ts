import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxTypedJsComponent } from 'ngx-typed-js';
// import { Typed } from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  x:any
  constructor() { 
  }

  ngOnInit(): void {
  }
  innerPages:any[]=[
    {pagename:"resturant",img:"assets/images/drinks.jpg",title:"see our resturants"},
    {pagename:"foods",img:"assets/images/foods.jpg",title:"all foods"},
    {pagename:"menu",img:"assets/images/Landing-inner-img.jpg",title:"all menus"},
    {pagename:"chefs",img:"assets/images/chefs.jpg",title:"all chefs"},
    {pagename:"drinks",img:"assets/images/drinks.jpg",title:"all drinks"},
    {pagename:"feedbacks",img:"assets/images/07.jpg",title:"our FeedBacks"}, 
  ]
}
