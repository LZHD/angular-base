import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToastService} from "./service/toast.service";
import {ToastBoxComponent} from "./component/toast-box.component";
import {ToastComponent} from "./component/toast.component";

@NgModule({
	imports: [
		CommonModule
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
