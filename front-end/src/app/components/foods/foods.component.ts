import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss']
})
export class FoodsComponent implements OnInit {
  constructor(private wowService: NgwWowService) { 
   
    this.wowService.init(); 
 

}

  ngOnInit(): void {
    
  }
  
  foods:any[]=[
    {img:"assets/images/30.jpg",price:30,desc:"Fried Potatoes",style:"wow fadeInLeft"},
    {img:"assets/images/31.jpg",price:15,desc:"Roast Pork (4 Sticks)",style:"wow fadeInDown"},
    {img:"assets/images/32.jpg",price:20,desc:"Tuna Roast Source",style:"wow fadeInRight"},

    {img:"assets/images/38.jpg",price:50,desc:"Juice",style:"wow fadeInLeft"},
    {img:"assets/images/9.jpg",price:60,desc:"Baked Potato",style:"wow fadeInDown"},
    {img:"assets/images/2.jpg",price:20,desc:"Salted Fried",style:"wow fadeInRight"},

    {img:"assets/images/12.jpg",price:90,desc:"Salted Fried Chicken",style:"wow fadeInLeft"},
    {img:"assets/images/28.jpg",price:30,desc:"Roast Source",style:"wow fadeInDown"},
    {img:"assets/images/23.jpg",price:80,desc:"Baked Potato Pizza",style:"wow fadeInRight"},
  ]


}
