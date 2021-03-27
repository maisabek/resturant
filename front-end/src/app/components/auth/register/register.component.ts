import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

 


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
 
 }

   register = new FormGroup({
  fname: new FormControl("",Validators.required),
  email:new FormControl("",[Validators.required,Validators.email]),
  password:new FormControl("",Validators.required),
  phone: new FormControl("",[Validators.required,Validators.maxLength(11)])
});

onSubmit(){
 
}

}
