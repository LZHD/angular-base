import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
// 第三方
import {AgGridModule} from "ag-grid-angular";
import {SidebarModule} from 'ng-sidebar';
import {SuiModule} from "ng2-semantic-ui";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {GridBaseModule} from "./grid-base/grid-base.module";
import {ToastModule} from "./toast/toast.module";
import {HttpClientModule} from "@angular/common/http";
import {TreeBaseModule} from "./tree-base/tree-base.module";
import {MapModule} from "./map/map.module";

/**
 * 公共模块
 */
@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		RouterModule,
		HttpClientModule
	],
	declarations: [],
	providers: [],
	entryComponents: [],
	exports: [
		BrowserModule,
		BrowserAnimationsModule,
		CommonModule,
		FormsModule,
		RouterModule,
		ReactiveFormsModule,
		SuiModule,
		SidebarModule,
		AgGridModule,
		GridBaseModule,
		ToastModule,
		TreeBaseModule,
		MapModule
	]
})
export class SharedModule {
}
