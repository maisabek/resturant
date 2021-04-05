import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

 


  constructor(private fb: FormBuilder,public auth:AuthService) { }

  ngOnInit(): void {
    if(localStorage.getItem('user') !== null){
      this.isSignedIn=true
    }else{
      this.isSignedIn=false
    }
 }

   register = new FormGroup({
  fname: new FormControl("",Validators.required),
  email:new FormControl("",[Validators.required,Validators.email]),
  password:new FormControl("",Validators.required),
  phone: new FormControl("",[Validators.required,Validators.maxLength(11)])
});


isSignedIn=false
async onSignIn(email:string,password:string){
 await this.auth.signup(email,password)
 if(this.auth.isLoggedIn)
   this.isSignedIn=true
}

}
