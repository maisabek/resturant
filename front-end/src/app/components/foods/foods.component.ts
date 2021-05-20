import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss']
})
export class FoodsComponent implements OnInit {
  constructor() { 
  
  }

  ngOnInit(): void {
    
  }
  
  foods:any[]=[
    {img:"assets/images/30.jpg",price:30,desc:"Fried Potatoes"},
    {img:"assets/images/31.jpg",price:15,desc:"Roast Pork (4 Sticks)"},
    {img:"assets/images/32.jpg",price:20,desc:"Tuna Roast Source"},
    {img:"assets/images/38.jpg",price:50,desc:"Juice"},
    {img:"assets/images/9.jpg",price:60,desc:"Baked Potato"},
    {img:"assets/images/2.jpg",price:20,desc:"Salted Fried"},
    {img:"assets/images/12.jpg",price:90,desc:"Salted Fried Chicken"},
    {img:"assets/images/28.jpg",price:30,desc:"Roast Source"},
    {img:"assets/images/23.jpg",price:80,desc:"Baked Potato Pizza"},
  ]


}
