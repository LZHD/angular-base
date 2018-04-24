import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {GridOptions} from "ag-grid";
import {LocaleText} from "./model/LocaleText";
import {GridBbarComponent} from "./grid-bbar/grid-bbar.component";
import {Ttars} from "./model/GridbaseModel";
import {isUndefined} from "util";
import {GridService} from "./service/grid-base.service";

@Component({
	selector: 'app-grid-base',
	templateUrl: './grid-base.component.html',
	styleUrls: ['./grid-base.component.scss'],
	providers: [
		GridService
	]
})
export class GridBaseComponent implements OnInit {
	protected gridApi;
	protected gridColumnApi;
	private queryParams = null;
	@Input() public gridOptions: GridOptions = this.getDefaultSetting();
	@Input() public columnDefs: object[];
	@Input() public theme = 'ag-theme-material';
	@Input() public rowData: object[];
	@Input() public ttars: Ttars[];
	@Input() public enableTbar?: boolean = true; // 启用头部工具条
	@Input() public enableBbar?: boolean = true; // 启用底部工具条
	@Input() public autoSizeAllColumns: boolean = false; // 自适应列宽
	@Input() public sizeColumnsToFit: boolean = false; // 充满表格宽度自适应
	@Input() public rowDataUrl: string; // url
	@Input() public rowDataOtherUrl: string; // url
	@Output() public onRowClicked: EventEmitter<any> = new EventEmitter();
	@Output() public onRenderAfter: EventEmitter<any> = new EventEmitter();

	@ViewChild(GridBbarComponent)
	private bbar: GridBbarComponent;
	protected serverPage: boolean = !isUndefined(this.rowDataUrl); // 服务端分页
	constructor(private gridService: GridService) {
	}

	ngOnInit() {
	}

	private onGridReady(params) {
		this.gridApi = params.api;
		this.gridColumnApi = params.columnApi;
	}

	// 获取表格API进行操作
	public getGridApi() {
		return this.gridApi;
	}

	// 获取表格列API进行操作
	public getColumnApi() {
		return this.gridColumnApi;
	}

	public getDefaultSetting(): GridOptions {
		return {
			enableColResize: true,
			enableSorting: true,
			enableFilter: true,
			suppressRowClickSelection: false, /*禁止点击选择行*/
			rowSelection: 'multiple',
			localeText: LocaleText,
			context: {
				grid: this
			}
		};
	}

	// 单击行事件
	protected rowClick(rowData) {
		this.onRowClicked.emit(rowData.data);
	}

	// 直接写入数据
	public setGridData(data: object[]) {
		this.rowData = data;
		if (this.bbar) {
			setTimeout(() => {
				this.bbar.disabledLimit = false;
				this.bbar.pageParams.totalPages = this.gridApi.paginationGetTotalPages();
				this.bbar.pageParams.totalElements = this.gridApi.paginationGetRowCount();
				this.bbar.pageParams.numberOfElements = this.gridApi.paginationGetPageSize();
				this.bbar.pageParams.size = this.gridApi.paginationGetPageSize();
				this.bbar.pageParams.first = false;
				this.bbar.pageParams.last = false;
				this.bbar.pageParams.number = this.gridApi.paginationGetCurrentPage();
			}, 300);
		}
	}

	protected themeChange(theme: string) {
		this.theme = theme;
	}

	// 渲染完成后操作
	private renderAfter() {
		// 所有列宽度自适应
		if (this.autoSizeAllColumns && !this.sizeColumnsToFit) {
			const allColumnIds = [];
			this.gridColumnApi.getAllColumns().forEach(function (column) {
				allColumnIds.push(column.colId);
			});
			this.gridColumnApi.autoSizeColumns(allColumnIds);
			this.gridColumnApi.autoSizeAllColumns();
		} else if (this.sizeColumnsToFit) {
			this.gridApi.sizeColumnsToFit();
		}
	}

	protected load() {
		if (this.serverPage) {
			if (isUndefined(this.rowDataUrl)) {
				return;
			}
			const params = this.bbar.getParams();
			// 添加查询条件
			Object.assign(params, params, this.queryParams);
			return this.gridService.query(this.rowDataUrl, this.rowDataOtherUrl, params)
				.subscribe(res => {
					this.rowData = res;
					this.bbar.disabledLimit = false;
					this.bbar.pageParams = res;
					console.log(res);
				});
		} else {
			this.setGridData(this.rowData);
		}
		setTimeout(() => {
			// 渲染完成才能进行选中等操作
			this.onRenderAfter.emit(this.rowData);
			this.renderAfter();
		});
	}
}
