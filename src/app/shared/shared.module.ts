import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// 第三方
import {AgGridModule} from 'ag-grid-angular';
import {SidebarModule} from 'ng-sidebar';
import {SuiModule} from 'ng2-semantic-ui';
import {NgZorroAntdModule} from 'ng-zorro-antd';
// 自己
import {GridBaseModule} from './grid-base/grid-base.module';
import {TreeBaseModule} from './tree-base/tree-base.module';
import {ToastModule} from './toast/toast.module';
import {MapModule} from './map/map.module';

const THIRDMODULES = [
	AgGridModule,
	SidebarModule,
	SuiModule,
	NgZorroAntdModule
];
const MYMODULES = [
	GridBaseModule,
	ToastModule,
	TreeBaseModule,
	MapModule
];
const COMPONENTS = [];
const DIRECTIVES = [];

/**
 * 公共模块
 */
@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		RouterModule,
		ReactiveFormsModule,
		...THIRDMODULES
	],
	declarations: [
		...COMPONENTS,
		...DIRECTIVES
	],
	exports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule,
		...THIRDMODULES,
		...MYMODULES
	]
})
export class SharedModule {}
