import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {RoutesModule} from "./routes/routes.module";
import {LayoutModule} from "./layout/layout.module";
import {JasperoConfirmationsModule} from "@jaspero/ng2-confirmations";
import {ToastModule} from "./shared/toast/toast.module";

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		LayoutModule,
		SharedModule,
		RoutesModule,
		JasperoConfirmationsModule,
		ToastModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
