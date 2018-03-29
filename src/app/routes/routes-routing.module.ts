import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {MainComponent} from "../layout/main/main.component";

/**
 * modules总路由
 */
const routes: Routes = [
	{
		path: '',
		component: MainComponent,
		children: [
			{path: '', redirectTo: 'home', pathMatch: 'full'},
			{path: 'home', component: HomeComponent},
			{path: 'example', loadChildren: './example/example.module#ExampleModule'}
		]
	},
	{path: '**', redirectTo: 'home'}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { useHash: true})
	],
	exports: [
		RouterModule
	],
	providers: []
})

export class RoutesRoutingModule {
}


