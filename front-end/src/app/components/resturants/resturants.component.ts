import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resturants',
  templateUrl: './resturants.component.html',
  styleUrls: ['./resturants.component.scss']
})
export class ResturantsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  resturants:any[]=[
    {image:"assets/images/09.jpg",Title:"Resturant A",id:1},
    {image:"assets/images/reserve.jpg",Title:"Resturant B",id:2},
    {image:"assets/images/z.jpg",Title:"Resturant c",id:3},

    {image:"assets/images/ww.jpg",Title:"Resturant D",id:4},
    {image:"assets/images/dd.jpg",Title:"Resturant E",id:5},
    {image:"assets/images/hh.jpg",Title:"Resturant F",id:6},

    {image:"assets/images/ss.jpg",Title:"Resturant G",id:4},
    {image:"assets/images/ds.jpg",Title:"Resturant H",id:5},
    {image:"assets/images/ff.jpg",Title:"Resturant I",id:6}

  ]

}
