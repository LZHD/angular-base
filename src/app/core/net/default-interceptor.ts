import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs/Observable";


@Injectable()
export class DefaultInterceptor implements HttpInterceptor {
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const secureReq = req.clone({
			url: req.url.replace('http://', 'https://')
		});
		return next.handle(req);
	}
}