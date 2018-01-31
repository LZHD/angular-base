import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeviewMenuComponent } from './treeview-menu/treeview-menu.component';
import {SidebarComponent} from "./sidebar/sidebar.component";
import {MainComponent} from "./main.component";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {BsDropdownModule, CollapseModule, TypeaheadModule} from "ngx-bootstrap";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    TypeaheadModule.forRoot(),
    SharedModule
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
