import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "../layout/main.component";
import {HomeComponent} from "./home/home.component";
import {MapsComponent} from "./maps/maps.component";

/**
 * modules总路由
 */
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home',  component: HomeComponent },
      { path: 'maps',  component: MapsComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})

export class RoutesRoutingModule {
}


