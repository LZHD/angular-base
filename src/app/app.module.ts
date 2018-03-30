import {APP_INITIALIZER, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {RoutesModule} from "./routes/routes.module";
import {LayoutModule} from "./layout/layout.module";
import {JasperoConfirmationsModule} from "@jaspero/ng2-confirmations";
import {ToastModule} from "./shared/toast/toast.module";
import {StartupService} from "./core/startup/startup.service";
import {CoreModule} from "./core/core.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {DefaultInterceptorService} from "./core/net/defaultInterceptor.service";
import {HttpInterceptorModule} from "ng-http-interceptor";

export function StartupServiceFactory(startupService: StartupService): Function {
	return () => startupService.load();
}

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		HttpInterceptorModule,
		CoreModule,
		LayoutModule,
		SharedModule,
		RoutesModule,
		JasperoConfirmationsModule,
		ToastModule
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: DefaultInterceptorService,
			multi: true
		},
		StartupService,
		{
			provide: APP_INITIALIZER,
			useFactory: StartupServiceFactory,
			deps: [StartupService],
			multi: true
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
