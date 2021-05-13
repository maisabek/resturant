//npm install firebase @angular/fire --save

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {AngularFireAuth} from '@angular/fire/auth'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient) { }
  
   registerUrl=`http://localhost:3000/resturant/register`
   loginUrl=`http://localhost:3000/resturant/login`
   currentUserUrl=`http://localhost:3000/resturant/me`
   username:any
  register(data:any):Observable<any>{
    return this.http.post<any>(this.registerUrl,data)
  }
  login(data:any):Observable<any>{
   return this.http.post(this.loginUrl,data)
  }
  getCurrentUser():Observable<any>{
   return this.http.get(`${this.currentUserUrl}`)
  }
  logout(){
    localStorage.removeItem("token")
  }
  getToken(){
    localStorage.getItem('token')
  }
  isLogin(){
    return !!localStorage.getItem('token')
  }
}
