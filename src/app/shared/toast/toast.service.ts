import {Injectable} from '@angular/core';
import {ConfirmationService} from "@jaspero/ng2-confirmations";
import {ConfirmSettings} from "@jaspero/ng2-confirmations/src/interfaces/confirm-settings";
import {NotifyService} from "ngx-notify";

/**
 * toast服务
 */
@Injectable()
export class ToastService {
	private title: string = '操作提示';
    constructor(private confirmService: ConfirmationService, private notifyService: NotifyService) {
    }

    info(content: string) {
        this.notifyService.info(this.title, content);
    }

    success(content: string) {
        this.notifyService.info(this.title, content);
    }

    error(content: string) {
		this.notifyService.error(this.title, content);
    }

    warn(content: string) {
    	this.notifyService.info(this.title, content);
	}

	html(content: string, html?: string) {
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
