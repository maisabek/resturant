import { Component, OnInit, TemplateRef } from '@angular/core';
// import {MatDailog} from '@angular/material/dailog'
import {MatDialog} from '@angular/material/dialog'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private matDialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDailog(templateRef:TemplateRef<any>){
    this.matDialog.open(templateRef)
  }
  closeDialog(){
    this.matDialog.closeAll()
  }

}
