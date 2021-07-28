import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { throwError } from "rxjs";
import {catchError} from 'rxjs/operators'
import { AuthService } from "./auth.service";
@Injectable({providedIn:'root'})
export class errorInterceptor implements HttpInterceptor{
    constructor(private router:Router,private authService:AuthService){}
    intercept(req:HttpRequest<any>,next:HttpHandler){
        return next.handle(req).pipe(
            catchError((err:HttpErrorResponse)=> {
                if([401,403].indexOf(err.status) !== -1){
                    this.authService.logout()
                }else if(err.status == 404){
                  this.router.navigate(['/resourceNotFound',err.status])
                }else{
                    this.router.navigate(['/applicationError',err.status])
                }
                return throwError(err.statusText || err.message)
            })
        )
    }
}
