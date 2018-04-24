import {Component, OnDestroy, ViewChild} from '@angular/core';
import {ModalTemplate, SuiModalService, TemplateModalConfig} from "ng2-semantic-ui";

@Component({
	selector: 'app-maps',
	templateUrl: './maps.component.html',
	styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnDestroy {
	@ViewChild('modalTemplate')
	public modalTemplate: ModalTemplate<string, string, string>;

	constructor(public modalService: SuiModalService) {
	}

	open() {
		const config = new TemplateModalConfig(this.modalTemplate);
		this.modalService.open(config);
	}
}
