import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PageParams} from "./model/page-params";

@Component({
	selector: 'app-grid-bbar',
	templateUrl: './grid-bbar.component.html',
	styleUrls: ['./grid-bbar.component.scss']
})
export class GridBbarComponent implements OnInit {
	@Output() onThemeChange = new EventEmitter<string>();
	@Output() onReLoad = new EventEmitter<Object>();
	@Input() serverPage: boolean = true;
	@Input() gridApi;
	protected themes = ['默认', '浅蓝', '炫黑', '鲜明', '无边框'];
	private mapping = {
		'默认': 'ag-theme-material',
		'浅蓝': 'ag-theme-blue',
		'炫黑': 'ag-theme-dark',
		'鲜明': 'ag-theme-fresh',
		'无边框': 'ag-theme-bootstrap'
	};
	protected theme: string = this.themes[0];
	protected limits: number[] = [10, 25, 50, 200, 500];
	public pageParams = new PageParams();
	// 禁用分页
	public disabledLimit: Boolean = false;

	constructor() {
		this.pageParams.size = this.limits[2];
	}

	ngOnInit() {
		setTimeout(() => {
			this.pager("first");
		}, 500);
	}

	public getParams() {
		return {
			$limit: this.pageParams.size,
			$page: this.pageParams.number
		};
	}

	private themeChange(theme: string) {
		this.onThemeChange.emit(this.mapping[theme]);
	}

	protected limitChange(limit: number) {
		if (this.serverPage) {
			this.pageParams.size = limit;
			this.pageParams.number = 0;
		} else {
			this.gridApi.paginationSetPageSize(limit);
		}
		this.onReLoad.emit(this.getParams());
	}

	protected pager(opt: string) {
		if (this.serverPage) {
			switch (opt) {
				case 'first': {
					this.pageParams.number = 0;
					break;
				}
				case 'previous': {
					this.pageParams.number--;
					break;
				}
				case 'next': {
					this.pageParams.number++;
					break;
				}
				case 'last': {
					this.pageParams.number = this.pageParams.totalPages - 1;
					break;
				}
			}
		} else {
			switch (opt) {
				case 'first': {
					this.gridApi.paginationGoToFirstPage();
					break;
				}
				case 'previous': {
					this.gridApi.paginationGoToPreviousPage();
					break;
				}
				case 'next': {
					this.gridApi.paginationGoToNextPage();
					break;
				}
				case 'last': {
					this.gridApi.paginationGoToLastPage();
					break;
				}
			}
		}
		this.onReLoad.emit(this.getParams());
	}

}
