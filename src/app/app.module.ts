import {APP_INITIALIZER, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {RoutesModule} from "./routes/routes.module";
import {LayoutModule} from "./layout/layout.module";
import {JasperoConfirmationsModule} from "@jaspero/ng2-confirmations";
import {ToastModule} from "./shared/toast/toast.module";
import {StartupService, StartupServiceFactory} from "./core/startup/startup.service";
import {CoreModule} from "./core/core.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {DefaultInterceptor} from "./core/net/default-interceptor";
import {SidebarService} from './layout/sidebar/service/sidebar.service';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
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
		SidebarService
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
