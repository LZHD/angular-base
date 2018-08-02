import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// 自己
import {GridBaseModule} from './grid-base/grid-base.module';
import {ToastModule} from './toast/toast.module';
import {TreeBaseModule} from './tree-base/tree-base.module';
import {MapModule} from './map/map.module';
// 第三方
import {AgGridModule} from 'ag-grid-angular';
import {SidebarModule} from 'ng-sidebar';
import {SuiModule} from 'ng2-semantic-ui';
import {NgZorroAntdModule} from 'ng-zorro-antd';

/**
 * 公共模块
 */
@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		RouterModule,
		ReactiveFormsModule,
		NgZorroAntdModule
	],
	declarations: [],
	providers: [],
	entryComponents: [],
	exports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule,
		SuiModule,
		SidebarModule,
		AgGridModule,
		GridBaseModule,
		ToastModule,
		TreeBaseModule,
		MapModule,
		NgZorroAntdModule
	]
})
export class SharedModule {
}
