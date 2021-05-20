import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resturant-details',
  templateUrl: './resturant-details.component.html',
  styleUrls: ['./resturant-details.component.scss']
})
export class ResturantDetailsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }
   id:any
  ngOnInit(): void {
    this.get()
  }
  get(){
   this.activatedRoute.paramMap.subscribe((res)=>{
     this.id=res.get('id')
   })
  }

}
