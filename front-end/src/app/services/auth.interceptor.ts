import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injector } from "@angular/core";
import { AuthService } from "./auth.service";

export class authInterceptor implements HttpInterceptor{
    constructor(private inject:Injector){}
    intercept(req:HttpRequest<any>,next:HttpHandler){
        const authService=this.inject.get(AuthService)
        const modifedUrl=req.clone({
                setHeaders:{
                    Authorization:`Breare ${authService.getToken()}`
                }
            }
        )
         return next.handle(modifedUrl)
    }
}