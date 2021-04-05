import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database'
@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss']
})
export class FoodsComponent implements OnInit {
   foods:any[]
  constructor(private db:AngularFireDatabase) { 
   this.db.list('/courses').valueChanges().subscribe((res)=>{
     this.foods=res
   })
  }

  ngOnInit(): void {
  }

}
