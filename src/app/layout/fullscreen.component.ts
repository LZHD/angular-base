import { Component, HostListener } from '@angular/core';
import * as screenfull from 'screenfull';

@Component({
    selector: 'header-fullscreen',
    template: `
    <i class="fa fa-{{status ? 'compress' : 'expand'}}"></i>
	{{(status ? '取消全屏' : '全屏展示')}}
	`
})
export class HeaderFullScreenComponent {

    status = false;

    @HostListener('window:resize')
    _resize() {
        this.status = screenfull.isFullscreen;
    }

    @HostListener('click')
    _click() {
        if (screenfull.enabled) {
            screenfull.toggle();
        }
    }
}
