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
  
   registerUrl=`http://localhost:3000/resturant/register`
  register(data:any):Observable<any>{
    return this.http.post<any>(this.registerUrl,data)
  }
  login():Observable<any>{
   return this.http.get(this.registerUrl)
  }
  
  logout(){
    localStorage.removeItem("token")
  }
  getToken(){
    localStorage.getItem('token')
  }
}
