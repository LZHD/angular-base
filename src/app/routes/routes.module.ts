import {NgModule} from '@angular/core';
import {RoutesRoutingModule} from "./routes-routing.module";
import {SharedModule} from "../shared/shared.module";
import {HomeComponent} from "./home/home.component";

@NgModule({
  imports: [
    SharedModule,
    RoutesRoutingModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class RoutesModule {
}
