import {APP_INITIALIZER, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {RoutesModule} from "./routes/routes.module";
import {LayoutModule} from "./layout/layout.module";
import {ToastModule} from "./shared/toast/toast.module";
import {StartupService, StartupServiceFactory} from "./core/startup/startup.service";
import {CoreModule} from "./core/core.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {DefaultInterceptor} from "./core/net/default-interceptor";
import {SidebarService} from './layout/sidebar/service/sidebar.service';
import {JasperoConfirmationsModule} from "@jaspero/ng-confirmations";
import {NgZorroAntdModule, NZ_I18N, zh_CN} from "ng-zorro-antd";
import {registerLocaleData} from "@angular/common";
import zh from '@angular/common/locales/zh';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";

registerLocaleData(zh);
@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		CoreModule,
		LayoutModule,
		SharedModule,
		RoutesModule,
		JasperoConfirmationsModule.forRoot(),
		ToastModule
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: DefaultInterceptor,
			multi: true
		},
		StartupService,
		{
			provide: APP_INITIALIZER,
			useFactory: StartupServiceFactory,
			deps: [StartupService],
			multi: true
		},
		{
			provide: NZ_I18N,
			useValue: zh_CN
		},
		SidebarService
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
