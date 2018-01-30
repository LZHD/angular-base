import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main.component";
import {NgModule} from "@angular/core";

/**
 * 主体路由
 */
const mainRoutes: Routes = [
    {
        path: 'AngularStudy',
        component: MainComponent,
        loadChildren: '',
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(mainRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class MainRoutingModule {
}

