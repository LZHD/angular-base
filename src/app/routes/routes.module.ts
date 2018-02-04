import {NgModule} from '@angular/core';
import {RoutesRoutingModule} from "./routes-routing.module";
import {SharedModule} from "../shared/shared.module";
import {HomeComponent} from "./home/home.component";
import { MapsComponent } from './maps/maps.component';
import {BaiduMapModule} from "angular2-baidu-map";

@NgModule({
  imports: [
    SharedModule,
    RoutesRoutingModule,
    BaiduMapModule.forRoot({
      ak: 'yGBSbH5fsYTjnzbMdedroaqm0AHL9nef'
    })
  ],
  declarations: [
    HomeComponent,
    MapsComponent
  ]
})
export class RoutesModule {
}
