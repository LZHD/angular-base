import {NgModule} from '@angular/core';
import {RoutesRoutingModule} from "./routes-routing.module";
import {SharedModule} from "../shared/shared.module";
import {HomeComponent} from "./home/home.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    SharedModule,
    RoutesRoutingModule,
    NgbModule.forRoot()
  ],
  declarations: [
    HomeComponent
  ]
})
export class RoutesModule {
}
