import {Injectable} from '@angular/core';
import {HttpClientService} from "../../shared/http-client/http-client.service";
import {HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {catchError, map} from "rxjs/operators";
import {ToastService} from "../../shared/toast/service/toast.service";

@Injectable()
export class CoreService {
	private baseUrl = '';
	private headers = new HttpHeaders();

	constructor(private httpClient: HttpClientService, private toastService: ToastService) {
		this.headers.append('Content-Type', 'application/json');
	}

	// 查询
	get(url: string, params?: any): Observable<any> {
		return this.httpClient.get(url, {
			headers: this.headers,
			params: params
		}).pipe(
			catchError(this.handleError())
		);
	}

	// 删除
	delete(url: any, params?: any): Observable<any> {
		return this.httpClient.delete(url, {
			headers: this.headers,
			params: params
		}).pipe(
			catchError(this.handleError())
		);
	}

	// 新增
	post(url: any, data: any, params?: any): Observable<any> {
		return this.httpClient.post(url, data, {
			headers: this.headers,
			params: params
		}).pipe(
			catchError(this.handleError())
		);
	}

	// 修改
	put(url: any, data: any, params?: any): Observable<any> {
		return this.httpClient.put(url, data, {
			headers: this.headers,
			params: params
		}).pipe(
			catchError(this.handleError())
		);
	}

	// 部分修改
	patch(url: any, data: any, params?: any): Observable<any> {
		return this.httpClient.patch(url, data, {
			headers: this.headers,
			params: params
		}).pipe(
			catchError(this.handleError())
		);
	}

	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error);
			this.toastService.error(error.message);
			return of(result as T);
		};
	}
}
