import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

 


  constructor(private fb: FormBuilder,public auth:AuthService,private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('user') !== null){
      this.isSignedIn=true
    }else{
      this.isSignedIn=false
    }

    console.log("this.registerForm.value : ",this.registerForm.value)
 }

   registerForm = new FormGroup({
  name: new FormControl("",Validators.required),
  email:new FormControl("",[Validators.required,Validators.email]),
  password:new FormControl("",Validators.required),
  // phone: new FormControl("",[Validators.required,Validators.maxLength(11)])
});


isSignedIn=false
 registerFn(){
  this.auth.register(this.registerForm.value).subscribe((res)=>{

    // localStorage.setItem("token", res.token);
    console.log("success",this.registerForm.value,"token",res.token)
    this.router.navigate([`/home`])
    
  })
}

showPass:boolean=true

}
