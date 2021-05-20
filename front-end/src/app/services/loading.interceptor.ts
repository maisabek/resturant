import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoadingScreenService } from "../services/loading-screen/loading-screen.service";
import { finalize } from "rxjs/operators";


@Injectable()
export class LoadingScreenInterceptor implements HttpInterceptor {


  constructor(public loadingScreenService: LoadingScreenService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      this.loadingScreenService.isLoading.next(true)
      return next.handle(request).pipe(
          finalize(
              ()=>{
                  this.loadingScreenService.isLoading.next(false)
              }
          )
      )
  }
}