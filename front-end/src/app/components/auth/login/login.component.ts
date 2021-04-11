import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formBuild:FormGroup
  showPass:boolean=true
  constructor(private fb:FormBuilder,public auth:AuthService) { }
  ngOnInit(): void {
    this.formBuild=this.fb.group({
        email:'',
        password:''
    })

    if(localStorage.getItem('user') !== null){
      this.isSignedIn=true
    }else{
      this.isSignedIn=false
    }
  }
  isSignedIn=false
  async onSignIn(email:string,password:string){
   await this.auth.signin(email,password)
   if(this.auth.isLoggedIn)
     this.isSignedIn=true
  }


}
