import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {GridBaseComponent} from "../../../shared/grid-base/grid-base.component";
import {Ttars} from "../../../shared/grid-base/model/GridbaseModel";
import {ConfirmationService} from "@jaspero/ng2-confirmations";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit, AfterViewInit {
  protected columnDefs: object[];
  protected rowData: object[];
  protected ttars: Ttars[];
  @ViewChild(GridBaseComponent)
  private grid: GridBaseComponent;
  constructor(private _confirmation: ConfirmationService) {
    this.columnDefs = [
      {headerName: "Make", field: "make", width: 300},
      {headerName: "Model", field: "model", width: 300},
      {headerName: "Price", field: "price", width: 300}
    ];

    this.rowData = [
      {make: "Toyota", model: "Celica", price: 35000},
      {make: "Ford", model: "Mondeo", price: 32000},
      {make: "Porsche", model: "Boxter", price: 72000}
    ];
    this.ttars = [
		{name: '新增', cls: 'btn-success', iconCls: 'fa fa-plus-circle mr-2', onClick: this.create},
		{name: '删除', cls: 'btn-danger', iconCls: 'fa fa-plus-circle mr-2', onClick: this.test},
		{name: '修改', cls: 'btn-dark', iconCls: 'fa fa-plus-circle mr-2', onClick: this.test},
		{name: '详情', cls: 'btn-success', iconCls: 'fa fa-plus-circle mr-2', onClick: this.test}
	];
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.setData();
  }

  private rowClick = (data) => {
    console.log(data);
  }

  private setData = () => {
    const data: object[] = [];
    for (let i = 0; i < 10; i++) {
      data.push({
        make: "Toyota",
        model: "Celica",
        price: 35000
      });
    }
    setTimeout(() => this.grid.setGridData(data));
  }

  test = () => {
  	console.log("asdfasdfasd");
  }

  create = () => {
	  this._confirmation.create('请确认', '确定删除?', {
		  confirmText: '确定',
		  declineText: '取消'
	  });
  }
}
