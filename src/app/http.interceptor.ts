import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent
  } from '@angular/common/http';
import { Observable } from "rxjs/observable";
@Injectable()
export class MyHttpLogInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ):Observable<HttpEvent<any>> {
    return next.handle(request);
  }
}