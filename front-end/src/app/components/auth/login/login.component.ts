import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formBuild:FormGroup
  constructor(private fb:FormBuilder) { }
  ngOnInit(): void {
    this.formBuild=this.fb.group({
        email:'',
        password:''
    })
  }

}
