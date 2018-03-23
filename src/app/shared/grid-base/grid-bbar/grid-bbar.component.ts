import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PageParams} from "./model/page-params";

@Component({
  selector: 'app-grid-bbar',
  templateUrl: './grid-bbar.component.html',
  styleUrls: ['./grid-bbar.component.scss']
})
export class GridBbarComponent implements OnInit {
  @Output() onThemeChange = new EventEmitter<string>();
  @Output() onReLoad = new EventEmitter<Object>();
  private themes = ['默认', '浅蓝', '炫黑', '鲜明', '无边框'];
  private mapping = {
    '默认': 'ag-theme-material',
    '浅蓝': 'ag-theme-blue',
    '炫黑': 'ag-theme-dark',
    '鲜明': 'ag-theme-fresh',
    '无边框': 'ag-theme-bootstrap'
  };
  private theme: string = this.themes[0];
  private limits: number[] = [10, 25, 50, 200, 500];
  public pageParams = new PageParams();
  // 禁用分页
  public disabledLimit: boolean = false;

  constructor() {
    this.pageParams.size = this.limits[2];
  }

  ngOnInit() {
    setTimeout(() => {
      this.pager("first");
    })
  }

  public getParams() {
    return {
      $limit: this.pageParams.size,
      $page: this.pageParams.number
    }
  }

  protected themeChange(theme: string) {
    this.onThemeChange.emit(this.mapping[theme]);
  }

  protected limitChange(limit: number) {
    this.pageParams.size = limit;
    this.pageParams.number = 0;
    this.onReLoad.emit(this.getParams());
  }

  protected pager(opt: string) {
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
    this.onReLoad.emit(this.getParams());
  }

}
