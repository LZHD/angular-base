import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
	selector: 'app-main',
	styleUrls: ['./main.component.scss'],
	templateUrl: './main.component.html'
})

export class MainComponent implements OnInit {

	// 切换导航
	private toggleDescTip: String = "点击关闭导航菜单";

	private title: String = "首页";


	// 皮肤
	skins: any = {
		faded: {
			header_bg: "bg-faded navbar-light",
			header_a: "",
			header_btn: "btn-outline-primary",
			leftbar_bg: "bg-faded",
			leftbar_header: "bg-inverse"
		},
		primary: {
			header_bg: "bg-primary navbar-inverse",
			header_a: "text-white",
			header_btn: "btn-secondary",
			leftbar_bg: "bg-primary",
			leftbar_header: "bg-inverse"
		},
		success: {
			header_bg: "bg-success navbar-inverse",
			header_a: "text-white",
			header_btn: "btn-outline-primary",
			leftbar_bg: "bg-success",
			leftbar_header: "bg-inverse"
		},
		info: {
			header_bg: "bg-info navbar-inverse",
			header_a: "text-white",
			header_btn: "btn-success",
			leftbar_bg: "bg-info",
			leftbar_header: "bg-inverse"
		},
		warning: {
			header_bg: "bg-warning navbar-inverse",
			header_a: "text-white",
			header_btn: "btn-success",
			leftbar_bg: "bg-warning",
			leftbar_header: "bg-inverse"
		},
		danger: {
			header_bg: "bg-danger navbar-inverse",
			header_a: "text-white",
			header_btn: "btn-success",
			leftbar_bg: "bg-danger",
			leftbar_header: "bg-inverse"
		},
		inverse: {
			header_bg: "bg-color-deep",
			header_a: "text-white",
			header_btn: "btn-outline-success",
			leftbar_bg: "bg-color-black-secondary",
			leftbar_header: "bg-color-black-primary"
		}
	};
	skin: string = this.skins.inverse;
	skinNames: string[] = [];

	// 侧边栏设置
	private static autoClose_w = 860;
	private static autoClose_h = 500;
	private _opened: Boolean = true;
	private _modeNum: Number = 1;
	private _positionNum: Number = 0;
	private _dock: Boolean = false;
	private _closeOnClickOutside: Boolean = false;
	private _closeOnClickBackdrop: Boolean = false;
	private _showBackdrop: Boolean = false;
	private _animate: Boolean = true;
	private _trapFocus: Boolean = false;
	private _autoFocus: Boolean = false;
	private _keyClose: Boolean = false;
	private _autoCollapseWidth: Number = MainComponent.autoClose_w;
	private _autoCollapseHeight: Number = MainComponent.autoClose_h;
	private _MODES: Array<string> = ['over', 'push', 'slide'];
	private _POSITIONS: Array<string> = ['left', 'right', 'top', 'bottom'];

	constructor(private router: Router) {
	}

	/**
	 * 获取主题名称
	 */
	getSkinNames() {
		for (const name in this.skins) {
			this.skinNames.push(name);
		}
	}

	/**
	 * 设置主题
	 */
	setTheme(skin: any) {
		this.skin = this.skins[skin];
	}

	/**
	 * 初始化
	 */
	ngOnInit() {
		this.getSkinNames();
		this.changeMode();
		let thisComponent = this;
		window.onresize = function () {
			thisComponent.changeMode();
		};
	}

	/**
	 * 退出系统
	 */
	exitSys() {
		// const exitSysCfg = new ConfirmConfig('您确定退出系统吗？');
		// this.modalService.confirm(exitSysCfg).then((result) => {
		//   if (result.status === "approved") {
		//     //this.router.navigate(['/login']);
		//     this.authService.logout();
		//   }
		// }, (reason) => {
		// });
	}

	/**
	 * 激活/关闭侧边栏
	 */
	private _toggleOpened(): void {
		this._opened = !this._opened;
		if (this._opened) {
			this.toggleDescTip = "点击关闭导航菜单";
		} else {
			this.toggleDescTip = "点击展开导航菜单";
		}
	}

	/**
	 * 根据浏览器宽度，自动设置侧边栏出现方式
	 */
	private changeMode() {
		let browser_w = document.body.clientWidth;
		if (browser_w < MainComponent.autoClose_w && this._modeNum == 1) {
			/*over*/
			this._modeNum = 0;
			this._closeOnClickBackdrop = true;
			this._showBackdrop = true;
			console.info('Sidebar mode = over');
		}
		if (browser_w >= MainComponent.autoClose_w && this._modeNum == 0) {
			/*push*/
			this._modeNum = 1;
			this._closeOnClickBackdrop = false;
			this._showBackdrop = false;
			console.info('Sidebar mode = push');
		}
	}

	private _onOpenStart(): void {
		//console.info('Sidebar opening');
	}

	private _onOpened(): void {
		//console.info('Sidebar opened');
	}

	private _onCloseStart(): void {
		//console.info('Sidebar closing');
	}

	private _onClosed(): void {
		//console.info('Sidebar closed');
	}

}
