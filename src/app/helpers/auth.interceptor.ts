import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../servicios/login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private _loginService : LoginService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this._loginService.token();
    //const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtaWd1ZWxAZ21haWwuY29tIiwiZXhwIjoxNzMwMDEyODE2LCJub21icmUiOiJNaWd1ZWwifQ.kvl6es31MCkCBN5I_o1zotg6HStZ-KTYHrNwWGIWlaM";


    if(token){
      const clone = request.clone({
        headers : request.headers.set('Authorization', `Bearer ${token}`)
      })
      return next.handle(clone);
    }

    return next.handle(request);
  }
}
