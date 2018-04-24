import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TreeModule} from "angular-tree-component";
import {TreeBaseComponent} from "./tree-base.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
	  FormsModule,
	  TreeModule
  ],
  declarations: [
  	TreeBaseComponent
  ],
	exports: [
		TreeBaseComponent
	]
})
export class TreeBaseModule { }
