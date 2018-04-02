import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from './module-import-guard';
import {CoreService} from "./http-service/core.service";
import {HttpClientService} from "../shared/http-client/http-client.service";

@NgModule({
	providers: [
		HttpClientService,
		CoreService
	]
})
export class CoreModule {
	constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
		throwIfAlreadyLoaded(parentModule, 'CoreModule');
	}
}
