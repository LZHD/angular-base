import {Component, Input, OnInit} from '@angular/core';
import {Ttars} from "../model/GridbaseModel";

@Component({
	selector: 'app-grid-ttar',
	templateUrl: './grid-ttar.component.html',
	styleUrls: ['./grid-ttar.component.scss']
})
export class GridTtarComponent implements OnInit {
	@Input() ttars: Ttars[];

	constructor() {
	}

	ngOnInit() {
	}

}
