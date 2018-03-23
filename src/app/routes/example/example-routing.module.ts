import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MapsComponent} from "./maps/maps.component";
import {GridComponent} from "./grid/grid.component";
import {NgxBootstrapComponent} from "./ngx-bootstrap/ngx-bootstrap.component";

/**
 * example总路由
 */
const routes: Routes = [
  { path: 'maps', component: MapsComponent },
  { path: 'grid', component: GridComponent },
  { path: 'ngx-bootstrap', component: NgxBootstrapComponent }
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
