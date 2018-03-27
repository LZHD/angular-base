import {Injectable} from '@angular/core';
import {ConfirmationService} from "@jaspero/ng2-confirmations";
import {ConfirmSettings} from "@jaspero/ng2-confirmations/src/interfaces/confirm-settings";
import {NotifyService} from "ngx-notify";
import {Subject} from "rxjs/Subject";
import {ToastConfig, ToastType} from "../model/toast-model";
import {Observable} from "rxjs/Observable";

/**
 * toast服务
 */
@Injectable()
export class ToastService {
	private title: string = '操作提示';
	private toastSubject = new Subject<ToastConfig>();

	constructor(private confirmService: ConfirmationService, private notifyService: NotifyService) {
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

	notifyInfo(content: string) {
		this.notifyService.info(this.title, content);
	}

	notifySuccess(content: string) {
		this.notifyService.info(this.title, content);
	}

	notifyError(content: string) {
		this.notifyService.error(this.title, content);
	}

	notifyWarn(content: string) {
		this.notifyService.info(this.title, content);
	}

	notifyHtml(content: string, html?: string) {
		this.notifyService.html(this.title, content, html);
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
