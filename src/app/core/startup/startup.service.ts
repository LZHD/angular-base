import { Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {ToastService} from "../../shared/toast/service/toast.service";

export function StartupServiceFactory(startupService: StartupService): Function {
	return () => startupService.load();
}
/**
 * 用于应用启动时
 * 一般用来获取应用所需要的基础数据等
 */
@Injectable()
export class StartupService {
	private headers = new HttpHeaders();
	private tokon: Object = null;
	private moduleTree: Array<any> = [];
	private resources: Array<any> = [];

	// 防止造成循环依赖
    constructor(private http: HttpClient, private toastService: ToastService) {
		this.headers.append('Content-Type', 'application/json');
	}
	load(): Promise<any> {
		// only works with promises
		// https://github.com/angular/angular/issues/15088
		return new Promise((resolve, reject) => {
			this.http.get('assets/config.json')
				.pipe(
					// 接收其他拦截器后产生的异常消息
					catchError((data) => {
						resolve(null);
						return data;
					})
				).subscribe((data) => {
					if (data['devmode']) {
						this.loginTest(resolve, reject, data);
					}
				},
				() => { },
				() => {
					resolve(null);
				});
		});
	}

	private loginTest (resolve, reject, data) {
    	const submitData = {
			userName: data.dev_user.username,
			password: data.dev_user.password
		};
    	const url = data.restapi.devurl + '/system/user/login';

    	this.http.post(url, null , {
			headers: this.headers,
			params: submitData
		}).pipe(
            catchError((userData) => {
				resolve(null);
				return userData;
			})
		).subscribe((userData: object) => {
			console.log(userData);
			this.toastService.success('测试中');
			this.setModuleTree(userData.data.moduleTree);
			this.setResource(userData.data.resources);
			this.setToken(userData.data.token);
		},
		() => { },
		() => {
			resolve(null);
		});
	}

	public setModuleTree(moduleTree: Array<any>) {
		this.moduleTree = moduleTree;
	}

	public getModuleTree() {
		return this.moduleTree;
	}

	public setResource(resources: Array<any>) {
		this.resources = resources;
	}

	public getResource() {
		return this.resources;
	}

	public setToken(object: Object) {
		this.tokon = object;
	}

	public getUserToken() {
		return this.tokon;
	}
}
