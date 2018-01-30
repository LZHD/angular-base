import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeviewMenuComponent } from './treeview-menu/treeview-menu.component';
import {SidebarComponent} from "./sidebar/sidebar.component";
import {MainComponent} from "./main.component";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {BsDropdownModule, CollapseModule, TypeaheadModule} from "ngx-bootstrap";
import {Ng2BootstrapModule} from "ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    TypeaheadModule.forRoot()
  ],
  declarations: [
    MainComponent,
    TreeviewMenuComponent,
    SidebarComponent
  ]
})
export class MainModule { }
