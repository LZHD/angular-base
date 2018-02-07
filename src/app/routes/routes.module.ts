import {NgModule} from '@angular/core';
import {RoutesRoutingModule} from "./routes-routing.module";
import {SharedModule} from "../shared/shared.module";
import {HomeComponent} from "./home/home.component";
import {CollapseModule} from "ngx-bootstrap";
@NgModule({
  imports: [
    SharedModule,
    RoutesRoutingModule,
    CollapseModule.forRoot(),
  ],
  declarations: [
    HomeComponent
  ]
})
export class RoutesModule {
}
