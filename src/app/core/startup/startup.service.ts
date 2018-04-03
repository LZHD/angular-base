import { Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {ToastService} from "../../shared/toast/service/toast.service";


/**
 * 用于应用启动时
 * 一般用来获取应用所需要的基础数据等
 */
@Injectable()
export class StartupService {
	// 防止造成循环依赖
    constructor(private http: HttpClient, private toastService: ToastService) { }
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
						this.toastService.success('测试中');
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
    	const submitData = {};
    	const url = '';

    	this.http.post(url, submitData).pipe(
            catchError((userData) => {
				resolve(null);
				return userData;
			})
		).subscribe((userData) => {
			console.log(userData);
		},
		() => { },
		() => {
			resolve(null);
		});
	}
}
