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
import { TreeComponent } from './tree/tree.component';
import {TreeBaseModule} from "../../shared/tree-base/tree-base.module";
import {MapModule} from "../../shared/map/map.module";

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
		GridBaseModule,
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		TreeBaseModule,
		MapModule
	],
	declarations: [
		MapsComponent,
		GridComponent,
		NgxBootstrapComponent,
		TreeComponent
	]
})
export class ExampleModule {
}
