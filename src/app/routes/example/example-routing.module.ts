import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MapsComponent} from "./maps/maps.component";

/**
 * example总路由
 */
const routes: Routes = [
  { path: 'maps', component: MapsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})

export class ExampleRoutingModule {
}
