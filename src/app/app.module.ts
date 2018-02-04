import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MainModule} from "./layout/main.module";
import {SharedModule} from "./shared/shared.module";
import {RoutesModule} from "./routes/routes.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MainModule,
    SharedModule,
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
