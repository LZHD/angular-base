import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotifyModule} from "ngx-notify";
import {ToastService} from "./service/toast.service";
import {ToastBoxComponent} from "./component/toast-box.component";
import {ToastComponent} from "./component/toast.component";

@NgModule({
	imports: [
		CommonModule,
		NotifyModule.forRoot({
			options: {
				position: ['right', 'top']
			},
			notify: {
				progress: true
			}
		})
	],
	exports: [
		ToastBoxComponent
	],
	declarations: [
		ToastComponent,
		ToastBoxComponent
	],
	providers: [
		ToastService
	]
})
export class ToastModule {
}
