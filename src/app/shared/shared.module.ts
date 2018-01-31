import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// 第三方
import {AgGridModule} from "ag-grid-angular";
import {SidebarModule} from 'ng-sidebar';
import {SuiModule} from "ng2-semantic-ui";
import {Ng2BootstrapModule} from "ng-bootstrap";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {BsDropdownModule, CollapseModule, TypeaheadModule} from "ngx-bootstrap";
import {HttpModule} from "@angular/http";

/**
 * 公共模块
 */
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        HttpModule,
      NgbModule.forRoot(),
      CollapseModule.forRoot(),
      BsDropdownModule.forRoot(),
      TypeaheadModule.forRoot(),
    ],
    declarations: [
    ],
    providers: [
    ],
    entryComponents: [
    ],
    exports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        SuiModule,
        NgbModule,
        Ng2BootstrapModule,
        SidebarModule,
        AgGridModule,
    ]
})
export class SharedModule {
}
