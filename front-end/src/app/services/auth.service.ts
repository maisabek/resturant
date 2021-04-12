//npm install firebase @angular/fire --save

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {AngularFireAuth} from '@angular/fire/auth'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn=false
  constructor(public firebaseAuth:AngularFireAuth,private http:HttpClient) { }
  // async signin(email:string,password:string){
  //  await this.firebaseAuth.signInWithEmailAndPassword(email,password).then(res =>{
  //    this.isLoggedIn=true
  //    localStorage.setItem('user',JSON.stringify(res.user))
  //   })
  // }

  // async signup(email:string,password:string){
  //  await this.firebaseAuth.createUserWithEmailAndPassword(email,password).then(res=>{
  //    this.isLoggedIn=true
  //    localStorage.setItem('user',JSON.stringify(res.user))
  //  })
  // }
   registerUrl=`http://localhost:3000/resturant/register`
  register(data:any):Observable<any>{
    return this.http.post<any>(this.registerUrl,data)
  }
  logout(){
    localStorage.removeItem("token")
  }
  getToken(){
    localStorage.getItem('token')
  }
}
