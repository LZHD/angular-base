import { NgModule } from '@angular/core';
import { MapsComponent } from './maps/maps.component';
import {AlertModule} from "ngx-bootstrap";
import {BaiduMapModule} from "angular2-baidu-map";
import {ExampleRoutingModule} from "./example-routing.module";

@NgModule({
  imports: [
    ExampleRoutingModule,
    AlertModule.forRoot(),
    BaiduMapModule.forRoot({
      ak: 'yGBSbH5fsYTjnzbMdedroaqm0AHL9nef'
    })
  ],
  declarations: [
    MapsComponent
  ]
})
export class ExampleModule { }
