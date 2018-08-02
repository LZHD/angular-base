import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LicenseManager} from "ag-grid-enterprise";
import {AgGridModule} from "ag-grid-angular";
import {GridBaseComponent} from "./grid-base.component";
import {FormsModule} from "@angular/forms";
import {GridBbarComponent} from './grid-bbar/grid-bbar.component';
import {GridTtarComponent} from './grid-ttar/grid-ttar.component';
import {NgZorroAntdModule} from "ng-zorro-antd";

LicenseManager.setLicenseKey('you keys'); // 注册专业版

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		AgGridModule.withComponents([
			GridBbarComponent
		]),
		NgZorroAntdModule
	],
	declarations: [
		GridBaseComponent,
		GridBbarComponent,
		GridTtarComponent
	],
	exports: [
		GridBaseComponent,
		GridTtarComponent
	]
})
export class GridBaseModule {
}
