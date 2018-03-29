import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {getHttpHeadersOrInit, HttpInterceptorModule, HttpInterceptorService} from "ng-http-interceptor";
import {StartupService} from "../startup/startup.service";

@NgModule({
	imports: [
		CommonModule,
		HttpInterceptorModule
	],
	declarations: []
})

export class InterceptorModule {
	constructor(private httpInterceptor: HttpInterceptorService, private startupService: StartupService) {
		this.httpInterceptor.request().addInterceptor((data, method) => {
			const headers = getHttpHeadersOrInit(data, method);
			return data;
		});

		this.httpInterceptor.response().addInterceptor((res, method, ctx) => {
			return res;
		});
	}
}
