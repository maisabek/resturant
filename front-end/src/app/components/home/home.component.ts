import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgxTypedJsComponent } from 'ngx-typed-js';
// import { Typed } from 'typed.js';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {MatDialog} from '@angular/material/dialog'
import {NgwWowService} from 'ngx-wow'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  x:any
  constructor(private DialogRef:MatDialog,private wowService: NgwWowService) { 
   
    this.wowService.init(); 
 

}
  ngOnInit(): void {
  }
  openDialog(templateRef:TemplateRef<any>){
    this.DialogRef.open(templateRef)
  }
  closeDialog(){
    this.DialogRef.closeAll()
  }
  innerPages:any[]=[
    {pagename:"menu",img:"assets/images/Landing-inner-img.jpg",title:"our menu",style:"wow fadeInLeft"},
    {pagename:"foods",img:"assets/images/foods.jpg",title:"our foods",style:"wow fadeInDown"},
    {pagename:"resturant",img:"assets/images/drinks.jpg",title:"our resturant",style:"wow fadeInRight"},
  
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
