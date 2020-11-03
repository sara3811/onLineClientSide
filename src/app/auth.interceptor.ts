import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        let token = localStorage.getItem("user");
        if (token) {
            request = request.clone({
                headers: request.headers.set('Authorization', `Basic ${token}`)
            });
        }
        return next.handle(request);
    }

}