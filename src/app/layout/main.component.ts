import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {MainData} from "./model/mainModel";


/**
 * 主体组件
 */
@Component({
  templateUrl: './main.component.html'
})

export class MainComponent implements OnInit {

  //切换导航
  private toggleDescTip: string = "点击关闭导航菜单";

  //切换用户信息卡标识
  private userCardClose: boolean = true;

  //用户数据
  private mainData: MainData = {
    userData: {
      userName: "张医生",
      userHeaderImg: "./assets/img/user-header.png",
      mobilePhone: "1895090***2",
      email: "332557712@qq.com",
      positions: "Java工程师、打杂工程师"
    },
    menuData: null
  }

  private title: string = "首页";


  //皮肤
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
      header_bg: "bg-inverse navbar-inverse",
      header_a: "text-white",
      header_btn: "btn-outline-success",
      leftbar_bg: "bg-color-black-secondary",
      leftbar_header: "bg-color-black-primary"
    }
  };
  skin: string = this.skins.inverse;
  skinNames: string[] = [];
  //导航展开收起
  protected isCollapsed: boolean = true;

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

  public collapsed(event: any): void {
    //console.log(event);
  }

  public expanded(event: any): void {
    //console.log(event);
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
   * 跳转首页
   */
  toHome() {
    this.title = "首页";
    this.router.navigate(['/']);
  }

  /**
   * 头像更换
   */
  avatarReplacement() {
    // this.ngbModalService.open(AvatarCropperComponent, {
    //   size: 'lg',
    //   backdrop: 'static',
    //   keyboard: false
    // }).result.then((result) => {
    //
    // }, (reason) => {
    //
    // });
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


  //侧边栏设置
  private static autoClose_w = 860;
  private static autoClose_h = 500;
  private _opened: boolean = true;
  private _modeNum: number = 1;
  private _positionNum: number = 0;
  private _dock: boolean = false;
  private _closeOnClickOutside: boolean = false;
  private _closeOnClickBackdrop: boolean = false;
  private _showBackdrop: boolean = false;
  private _animate: boolean = true;
  private _trapFocus: boolean = false;
  private _autoFocus: boolean = false;
  private _keyClose: boolean = false;
  private _autoCollapseWidth: number = MainComponent.autoClose_w;
  private _autoCollapseHeight: number = MainComponent.autoClose_h;
  private _MODES: Array<string> = ['over', 'push', 'slide'];
  private _POSITIONS: Array<string> = ['left', 'right', 'top', 'bottom'];

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


