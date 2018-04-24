import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AbmModule} from "angular-baidu-maps";
import {FormsModule} from "@angular/forms";
import {MapComponent} from "./map.component";

@NgModule({
  imports: [
    CommonModule,
	  FormsModule,
	  AbmModule.forRoot({
		  apiKey: 'yGBSbH5fsYTjnzbMdedroaqm0AHL9nef'
	  }),
  ],
  declarations: [
  	MapComponent
  ],
	exports: [
		MapComponent
	]
})
export class MapModule { }
