import { NgModule } from '@angular/core';
import { TreeviewMenuComponent } from './treeview-menu/treeview-menu.component';
import {SidebarComponent} from "./sidebar/sidebar.component";
import {MainComponent} from "./main.component";
import {BsDropdownModule, CollapseModule, TypeaheadModule} from "ngx-bootstrap";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    SharedModule,
    NgbModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    TypeaheadModule.forRoot()
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
  providers: []
})
export class MainModule { }
