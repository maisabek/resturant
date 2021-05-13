import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgxTypedJsComponent } from 'ngx-typed-js';
// import { Typed } from 'typed.js';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {MatDialog} from '@angular/material/dialog'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  x:any
  constructor(private DialogRef:MatDialog) { 
  }

  ngOnInit(): void {
  }
  openDialog(templateRef:TemplateRef<any>){
    this.DialogRef.open(templateRef)
  }
  innerPages:any[]=[
    {pagename:"resturant",img:"assets/images/drinks.jpg",title:"our resturant"},
    {pagename:"foods",img:"assets/images/foods.jpg",title:"our foods"},
    {pagename:"menu",img:"assets/images/Landing-inner-img.jpg",title:"our menu"},
    // {pagename:"chefs",img:"assets/images/chefs.jpg",title:"our chefs"},
    // {pagename:"drinks",img:"assets/images/drinks.jpg",title:"our drinks"},
    // {pagename:"feedbacks",img:"assets/images/07.jpg",title:"our feedbacks"}, 
  ]
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    navSpeed: 500,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: false
  }
  customOptions2: OwlOptions = {
    rtl:true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,

    navSpeed: 500,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: false
  }
}
