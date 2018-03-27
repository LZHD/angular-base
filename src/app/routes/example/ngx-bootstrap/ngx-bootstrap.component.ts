import {Component, OnInit, SecurityContext, TemplateRef, ViewChild} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {AlertComponent, AlertConfig, BsModalRef, BsModalService} from "ngx-bootstrap";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastConfig, ToastType} from "../../../shared/toast/model/toast-model";
import {ToastService} from "../../../shared/toast/service/toast.service";

export function getAlertConfig(): AlertConfig {
	return Object.assign(new AlertConfig(), {type: 'success'});
}

@Component({
	selector: 'app-ngx-bootstrap',
	templateUrl: './ngx-bootstrap.component.html',
	styleUrls: ['./ngx-bootstrap.component.scss'],
	providers: [{
		provide: AlertConfig,
		useFactory: getAlertConfig
	}]
})
export class NgxBootstrapComponent implements OnInit {
	dismissible = true;
	defaultAlerts: any[] = [
		{
			type: 'success',
			msg: `You successfully read this important alert message.`
		},
		{
			type: 'info',
			msg: `This alert needs your attention, but it's not super important.`
		},
		{
			type: 'danger',
			msg: `Better check yourself, you're not looking too good.`
		}
	];
	alerts = this.defaultAlerts;
	alerts1: any = [
		{
			type: 'success',
			msg: `<strong>Well done!</strong> You successfully read this important alert message.`
		},
		{
			type: 'info',
			msg: `<strong>Heads up!</strong> This alert needs your attention, but it's not super important.`
		},
		{
			type: 'danger',
			msg: `<strong>Warning!</strong> Better check yourself, you're not looking too good.`
		}
	];
	alerts2: any[] = [{
		type: 'success',
		msg: `Well done! You successfully read this important alert message. (added: ${new Date().toLocaleTimeString()})`,
		timeout: 5000
	}];

	index = 0;
	messages = [
		'You successfully read this important alert message.',
		'Now this text is different from what it was before. Go ahead and click the button one more time',
		'Well done! Click reset button and you\'ll see the first message'
	];
	checkModel: any = {left: false, middle: true, right: false};
	singleModel: string = '1';
	itemStringsLeft = [
		'Windstorm',
		'Bombasto',
		'Magneta',
		'Tornado'
	];

	itemStringsRight = ['Mr. O', 'Tomato'];
	modalRef: BsModalRef;
	config: object = {
		ignoreBackdropClick: true,
		animated: true
	};
	user: object = {};
	form: FormGroup;
	imgs: NodeListOf<Element>;
	activeSlideIndex: number = 0;
	@ViewChild('template1')
	private template1: TemplateRef<any>;

	constructor(sanitizer: DomSanitizer, private modalService: BsModalService, private fb: FormBuilder, private toastService: ToastService) {
		this.alerts1 = this.alerts1.map((alert: any) => ({
			type: alert.type,
			msg: sanitizer.sanitize(SecurityContext.HTML, alert.msg)
		}));
		this.form = fb.group({
			'name': new FormControl('', [Validators.required, Validators.maxLength(20)]),
			'pwd': ['', Validators.required]
		});
	}

	reset(): void {
		this.alerts = this.defaultAlerts;
	}

	onClosed(dismissedAlert: any): void {
		this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
	}

	ngOnInit() {
	}

	changeText() {
		if (this.messages.length - 1 !== this.index) {
			this.index++;
		}
	}

	add(): void {
		this.alerts2.push({
			type: 'info',
			msg: `This alert will be closed in 5 seconds (added: ${new Date().toLocaleTimeString()})`,
			timeout: 5000
		});
	}

	onClosed1(dismissedAlert: AlertComponent): void {
		this.alerts2 = this.alerts2.filter(alert => alert !== dismissedAlert);
	}

	openModal(template: TemplateRef<any>) {
		this.modalRef = this.modalService.show(template, this.config);
	}

	openModal1(img) {
		this.imgs = document.querySelectorAll('.boximg');
		const imgsArray = Array.from(this.imgs);
		// this.activeSlideIndex = imgsArray.indexOf(img.path[0]);
		this.modalRef = this.modalService.show(this.template1, this.config);
	}

	onTemplateSave(modal) {
		console.log('Template Submit Result:', this.user, modal);
	}

	onModelSave(modal) {
		console.log('Model Submit Result:', this.form.value, modal);
		modal.hide();
	}

	openInfo() {
		const toastCfg = new ToastConfig(ToastType.INFO, '这是一条INFO消息!', '', 3000);
		this.toastService.toast(toastCfg);
	}

}
