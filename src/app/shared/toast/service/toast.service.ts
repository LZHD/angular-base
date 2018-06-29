import {Injectable} from '@angular/core';
import {Subject} from "rxjs/Subject";
import {ToastConfig, ToastType} from "../model/toast-model";
import {Observable} from "rxjs/Observable";
import {ConfirmationService, ConfirmSettings} from "@jaspero/ng-confirmations";

/**
 * toast服务
 */
@Injectable()
export class ToastService {
	private title: String = '操作提示';
	private toastSubject = new Subject<ToastConfig>();

	constructor(private confirmService: ConfirmationService) {
	}

	getToasts(): Observable<ToastConfig> {
		return this.toastSubject;
	}


	toast(toastConfig: ToastConfig) {
		this.toastSubject.next(toastConfig);
	}

	info(content: string) {
		this.toast(new ToastConfig(ToastType.INFO, content));
	}


	warn(content: string) {
		this.toast(new ToastConfig(ToastType.WARNING, content));
	}

	success(content: string) {
		this.toast(new ToastConfig(ToastType.SUCCESS, content));
	}

	error(content: string) {
		this.toast(new ToastConfig(ToastType.ERROR, content));
	}

	confirm(content: string, title?: string, textCfg?: ConfirmSettings) {
		const _title: string = title || '请确认';
		const _textCfg: ConfirmSettings = textCfg || {
			confirmText: '确定',
			declineText: '取消'
		};
		return this.confirmService.create(_title, content, _textCfg);
	}

	/**
	 * 根据响应结果显示不同类型信息
	 * @param res
	 */
	response(res: { success: boolean, message: string }) {
		if (res.success) {
			this.success(res.message);
		} else {
			this.error(res.message);
		}
		return res;
	}

}
