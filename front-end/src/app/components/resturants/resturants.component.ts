import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgwWowService } from 'ngx-wow';
import { Subscription }   from 'rxjs';
import {filter} from 'rxjs/operators'
@Component({
  selector: 'app-resturants',
  templateUrl: './resturants.component.html',
  styleUrls: ['./resturants.component.scss']
})
export class ResturantsComponent implements OnInit {
  private wowSubscription: Subscription;

  constructor(private router: Router,private wowService: NgwWowService) { 
   
      this.wowService.init(); 
   

  }

  ngOnInit(): void {
  }
  resturants:any[]=[
    {image:"assets/images/09.jpg",Title:"Resturant A",id:1,style:"wow fadeInLeft"},
    {image:"assets/images/reserve.jpg",Title:"Resturant B",id:2,style:"wow fadeInDown"},
    {image:"assets/images/z.jpg",Title:"Resturant c",id:3,style:"wow fadeInRight"},

    {image:"assets/images/ww.jpg",Title:"Resturant D",id:4,style:"wow fadeInLeft"},
    {image:"assets/images/dd.jpg",Title:"Resturant E",id:5,style:"wow fadeInDown"},
    {image:"assets/images/hh.jpg",Title:"Resturant F",id:6,style:"wow fadeInRight"},

    {image:"assets/images/ss.jpg",Title:"Resturant G",id:4,style:"wow fadeInLeft"},
    {image:"assets/images/ds.jpg",Title:"Resturant H",id:5,style:"wow fadeInDown"},
    {image:"assets/images/ff.jpg",Title:"Resturant I",id:6,style:"wow fadeInRight"}

  ]
  ngOnDestroy() {
  }

}
