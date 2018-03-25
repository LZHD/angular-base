import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {RoutesModule} from "./routes/routes.module";
import {LayoutModule} from "./layout/layout.module";
import {JasperoConfirmationsModule} from "@jaspero/ng2-confirmations";

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		LayoutModule,
		SharedModule,
		RoutesModule,
		JasperoConfirmationsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
