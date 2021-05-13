import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  constructor(private fb: FormBuilder,private ModalService:BsModalService
    ,public auth:AuthService,private router:Router,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
  
    console.log("this.registerForm.value : ",this.registerForm.value)
 }

   registerForm = new FormGroup({
  name: new FormControl("",Validators.required),
  email:new FormControl("",[Validators.required,Validators.email,Validators.pattern('.*com$')]),
  password:new FormControl("",[Validators.required,Validators.minLength(7)]),
  // phone: new FormControl("",[Validators.required,Validators.maxLength(11)])
});

 registerFn(){
  this.auth.register(this.registerForm.value).subscribe((res)=>{

    localStorage.setItem("token", res.token);
     this.auth.username=res.resturant.name   
    this.openSnackBar("data added successfully","ok")
    this.router.navigate(['/menu'])
    
  },error=>{
    this.openSnackBar("Error,Data not Added ! Try Again","ok")
  })
}

showPass:boolean=true
@ViewChild('myTemplate',{static:true}) myTemplate:any
message:string=""
openModal(templateRef:TemplateRef<any>){
this.ModalService.show(templateRef)
}
hideModal(){
  this.ModalService.hide()
}
openSnackBar(message:string,action){
  this.snackbar.open(message,"ok")
}
}
