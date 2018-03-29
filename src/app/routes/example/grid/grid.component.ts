import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {GridBaseComponent} from "../../../shared/grid-base/grid-base.component";
import {Ttars} from "../../../shared/grid-base/model/GridbaseModel";
import {ToastService} from "../../../shared/toast/service/toast.service";

@Component({
	selector: 'app-grid',
	templateUrl: './grid.component.html',
	styleUrls: ['./grid.component.scss'],
	providers: [ToastService]
})
export class GridComponent implements OnInit, AfterViewInit {
	protected columnDefs: object[];
	protected rowData: object[];
	protected ttars: Ttars[];
	@ViewChild(GridBaseComponent)
	private grid: GridBaseComponent;

	constructor(private toastService: ToastService) {
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
			{name: '新增', cls: 'btn-success', iconCls: 'fa fa-plus-square-o mr-2', onClick: this.create},
			{name: '删除', cls: 'btn-danger', iconCls: 'fa fa-trash mr-2', onClick: this.test},
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
		for (let i = 0; i < 500; i++) {
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
		this.toastService.confirm('确定删除?').subscribe(res => res.resolved ? this.toastService.notifyError('sdfaasd') : this.toastService.notifyError('sdfaasd'));
	}
}
