import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { AuthService } from "./auth.service";

@Injectable({providedIn:'root'})
export class authInterceptor implements HttpInterceptor{
    constructor(private inject:Injector){}
    intercept(req:HttpRequest<any>,next:HttpHandler){
        const authService=this.inject.get(AuthService)
        const modifedUrl=req.clone({
                setHeaders:{
                    Authorization:`Bearer ${authService.getToken()}`
                }
            }
        )
         return next.handle(modifedUrl)
    }
}