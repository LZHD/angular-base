import {Injectable} from '@angular/core';
import {getHttpHeadersOrInit, HttpInterceptorService} from "ng-http-interceptor";
import {Http} from "@angular/http";

@Injectable()
export class DefaultInterceptorService {
	constructor(private httpInterceptor: HttpInterceptorService, private http: Http) {
		this.httpInterceptor.request().addInterceptor((data, method) => {
			const headers = getHttpHeadersOrInit(data, method);
			return data;
		});

		this.httpInterceptor.response().addInterceptor((res, method, ctx) => {
			return res;
		});
		this.http.get('/').map(r => r.text()).subscribe(console.log);
	}
}
