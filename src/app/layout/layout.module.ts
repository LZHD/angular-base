import {NgModule} from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {BsDropdownModule, CollapseModule, TooltipModule, TypeaheadModule} from "ngx-bootstrap";
import {TreeviewMenuComponent} from "./treeview-menu/treeview-menu.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {MainComponent} from "./main/main.component";

@NgModule({
	imports: [
		SharedModule,
		CollapseModule.forRoot(),
		BsDropdownModule.forRoot(),
		TypeaheadModule.forRoot(),
		TooltipModule.forRoot()
	],
	declarations: [
		MainComponent,
		TreeviewMenuComponent,
		SidebarComponent
	],
	exports: [
		MainComponent,
		TreeviewMenuComponent,
		SidebarComponent
	],
})
export class LayoutModule {
}
