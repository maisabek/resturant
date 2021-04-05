import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { authInterceptor } from "./auth.interceptor";
import { errorInterceptor } from "./error.interceptor";

export const interceptors=[
    {provide:HTTP_INTERCEPTORS,useClass:authInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:errorInterceptor,multi:true}
]