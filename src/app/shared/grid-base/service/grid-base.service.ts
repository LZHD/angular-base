import {Injectable} from '@angular/core';
import {CoreService} from "../../../core/service/core.service";

@Injectable()
export class GridService {
    private url: string;

    constructor(private coreService: CoreService) {
    }

    query(url: string, addUrl: string, params?) {
        this.url = url;
        return this.coreService.get(url + addUrl, params);
    }

    get(id: number) {
        const _url = this.url + id;
        return this.coreService.get(_url);
    }

    create(model: object) {
        return this.coreService.post(this.url, model);
    }

    modify(model: object) {
        return this.coreService.put(this.url, model);
    }

    remove(list: object[]) {
        const ids = this.coreService.getIdsFormList(list).join(',');
        const _url = this.url + ids;
        return this.coreService.delete(_url);
    }
}
