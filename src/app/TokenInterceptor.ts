import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetMineralService } from './get-mineral.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: GetMineralService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = '1db5c217-dc1f-479a-866e-57618ed77097'; // currently hardcode the token but it need to used by localStorage
    request = request.clone({
      setHeaders: {
        Authorization: `${token}`
      }
    });
    return next.handle(request);
  }
}