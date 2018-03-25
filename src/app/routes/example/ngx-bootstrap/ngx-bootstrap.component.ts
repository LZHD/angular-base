import {Component, OnInit, SecurityContext, TemplateRef} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {AlertComponent, AlertConfig, BsModalRef, BsModalService} from "ngx-bootstrap";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

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
	};
	user: object = {};
	form: FormGroup;

	constructor(sanitizer: DomSanitizer, private modalService: BsModalService, private fb: FormBuilder) {
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
		this.modalRef = this.modalService.show(template, {
			ignoreBackdropClick: true
		});
	}

	onTemplateSave(modal) {
		console.log('Template Submit Result:', this.user, modal);
	}

	onModelSave(modal) {
		console.log('Model Submit Result:', this.form.value, modal);
		modal.hide();
	}

}