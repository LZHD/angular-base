import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {GridOptions} from "ag-grid";
import {LocaleText} from "./model/LocaleText";
import {GridBbarComponent} from "./grid-bbar/grid-bbar.component";
import {Ttars} from "./model/GridbaseModel";

@Component({
  selector: 'app-grid-base',
  templateUrl: './grid-base.component.html',
  styleUrls: ['./grid-base.component.scss']
})
export class GridBaseComponent implements OnInit {
  private gridApi;
  private gridColumnApi;
  @Input() public gridOptions: GridOptions = this.getDefaultSetting();
  @Input() public columnDefs: object[];
  @Input() public theme = 'ag-theme-material';
  @Input() public rowData: object[];
  @Input() public ttars: Ttars[];
  @Input() public enableTbar?: boolean = true; // 启用头部工具条
  @Input() public enableBbar?: boolean = true; // 启用底部工具条
  @Input() public autoSizeAllColumns: boolean = false; // 自适应列宽
  @Input() public sizeColumnsToFit: boolean = false; // 充满表格宽度自适应
  @Input() public RowDataUrl: string; // url
  @Output() public onRowClicked: EventEmitter<any> = new EventEmitter();
  @Output() public onRenderAfter: EventEmitter<any> = new EventEmitter();

  @ViewChild(GridBbarComponent)
  private bbar: GridBbarComponent;
  constructor() {
  }

  ngOnInit() {
  }

  private onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
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
      this.bbar.disabledLimit = true;
      this.bbar.pageParams.totalElements = data.length;
      this.bbar.pageParams.numberOfElements = data.length;
      this.bbar.pageParams.size = data.length;
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
      this.gridColumnApi.getAllColumns().forEach(function(column) {
        allColumnIds.push(column.colId);
      });
      this.gridColumnApi.autoSizeColumns(allColumnIds);
      this.gridColumnApi.autoSizeAllColumns();
    } else if (this.sizeColumnsToFit) {
      this.gridApi.sizeColumnsToFit();
    }
  }

  protected load() {
    setTimeout(() => {
      // 渲染完成才能进行选中等操作
      this.onRenderAfter.emit(this.rowData);
      this.renderAfter();
    });
  }
}
