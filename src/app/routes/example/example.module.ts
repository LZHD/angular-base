import {NgModule} from '@angular/core';
import {
	AccordionModule, AlertModule, BsDropdownModule, ButtonsModule, CarouselModule,
	DatepickerModule, ModalModule, PaginationModule, PopoverModule, ProgressbarModule, RatingModule, SortableModule,
	TabsModule, TimepickerModule, TooltipModule, TypeaheadModule
} from "ngx-bootstrap";
import {MapsComponent} from './maps/maps.component';
import {ExampleRoutingModule} from "./example-routing.module";
import {AbmModule} from "angular-baidu-maps";
import {GridComponent} from './grid/grid.component';
import {GridBaseModule} from "../../shared/grid-base/grid-base.module";
import {NgxBootstrapComponent} from './ngx-bootstrap/ngx-bootstrap.component';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
	imports: [
		ExampleRoutingModule,
		// ngx-components
		AlertModule.forRoot(),
		AccordionModule.forRoot(),
		ButtonsModule.forRoot(),
		CarouselModule.forRoot(),
		DatepickerModule.forRoot(),
		BsDropdownModule.forRoot(),
		ModalModule.forRoot(),
		PaginationModule.forRoot(),
		PopoverModule.forRoot(),
		ProgressbarModule.forRoot(),
		RatingModule.forRoot(),
		SortableModule.forRoot(),
		TabsModule.forRoot(),
		TimepickerModule.forRoot(),
		TooltipModule.forRoot(),
		TypeaheadModule.forRoot(),
		AbmModule.forRoot({
			apiKey: 'yGBSbH5fsYTjnzbMdedroaqm0AHL9nef'
		}),
		GridBaseModule,
		CommonModule,
		FormsModule,
		ReactiveFormsModule
	],
	declarations: [
		MapsComponent,
		GridComponent,
		NgxBootstrapComponent
	]
})
export class ExampleModule {
}
