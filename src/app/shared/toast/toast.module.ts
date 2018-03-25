import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NotifyModule} from "ngx-notify";

@NgModule({
  imports: [
    CommonModule,
	  NotifyModule.forRoot({
		  options: {
			  position: [ 'right', 'top' ],
			  offset: [600, 50]
		  },
		  notify: {
			  progress: true
		  }
	  })
  ],
  declarations: []
})
export class ToastModule { }
