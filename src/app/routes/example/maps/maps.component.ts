import {Component, ViewChild} from '@angular/core';
import {ModalTemplate, SuiModalService, TemplateModalConfig} from "ng2-semantic-ui";
import {Ttars} from "../../../shared/grid-base/model/GridbaseModel";
import {MapComponent} from "../../../shared/map/map.component";

@Component({
	selector: 'app-maps',
	templateUrl: './maps.component.html',
	styleUrls: ['./maps.component.scss']
})
export class MapsComponent {
	protected ttars: Ttars[];
	@ViewChild('modalTemplate')
	public modalTemplate: ModalTemplate<string, string, string>;
	@ViewChild('testMap')
	public testMap: MapComponent;

	constructor(public modalService: SuiModalService) {
		this.ttars = [
			{name: '改变中心', cls: 'btn-success', iconCls: 'fa fa-plus-square-o mr-2', onClick: this.panTo},
			{name: '缩放', cls: 'btn-danger', iconCls: 'fa fa-trash mr-2', onClick: this.zoom},
			{name: '添加标记', cls: 'btn-dark', iconCls: 'fa fa-plus-circle mr-2', onClick: this.infoWindow},
			{name: '添加全景', cls: 'btn-success', iconCls: 'fa fa-plus-circle mr-2', onClick: this.all},
			{name: '位置', cls: 'btn-success', iconCls: 'fa fa-plus-circle mr-2', onClick: this.click}
		];
	}

	open() {
		const config = new TemplateModalConfig(this.modalTemplate);
		this.modalService.open(config);
	}

	panTo = () => {
		this.testMap.panTo();
	}

	zoom = () => {
		this.testMap.zoom();
	}

	infoWindow = () => {
		this.testMap.infoWindow();
	}

	all = () => {
		this.testMap.all();
	}

	click(e) {
		const point = e.point;
		this.testMap.geoc.getLocation(point, function(rs){
			const addComp = rs.addressComponents;
			// 基础地址信息
			let baseAddress = addComp.province + addComp.city + addComp.district;
			if (addComp.city === addComp.province) {
				baseAddress = addComp.province + addComp.district;
			}
			if (addComp.district.indexOf("市辖区") !== -1) {
				baseAddress = addComp.province + addComp.city;
			}
			console.log(addComp, baseAddress);
		});
	}
}
