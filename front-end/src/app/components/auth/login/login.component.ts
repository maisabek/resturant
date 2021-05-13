import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from '@angular/router'
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formBuild:FormGroup
  showPass:boolean=true
  constructor(private fb:FormBuilder,public auth:AuthService,
    private router:Router,private snackBar:MatSnackBar) { }
  ngOnInit(): void {
    this.formBuild=this.fb.group({
        email:'',
        password:''
    })

  }
  login(){
    this.auth.login(this.formBuild.value).subscribe((res)=>{
      localStorage.setItem("token",res.token)
      this.auth.getCurrentUser().subscribe((current)=>{
        console.log("current",current)
        // this.auth.username=current.name
        // console.log("this.auth.username",this.auth.username,"current.name",current.name)
      })
       this.router.navigate(['/menu'])
    },error =>{
      this.openSnackBar("Either Email or Password are incorrect","Try Again")
    })
  }
  openSnackBar(message:string,action:string){
    this.snackBar.open(message,action)
  }


}
