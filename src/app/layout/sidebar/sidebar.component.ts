import {Component, OnInit} from '@angular/core';
import {MenuData} from "../model/mainModel";
import {Router} from "@angular/router";
import {TypeaheadMatch} from "ngx-bootstrap";
import {StartupService} from "../../core/startup/startup.service";
import {SidebarService} from './service/sidebar.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
	// 菜单数据
	private menuData = [];
	// 显示的菜单数据
	protected data: Array<MenuData>;
	// 所有菜单数据
	private allData: Array<MenuData>;
	// 搜索文本
	protected searchTxt: string = '';
	// 搜索隐藏
	protected searchMsgHidden: Boolean = true;
	// 异步搜索菜单项目
	public dataArray = [];
	// 菜单数据
	private activeMenu = null;
	private chag: Subscription;

	constructor(private router: Router, private startService: StartupService,
				private sidebarService: SidebarService) {
	}

	ngOnInit() {
		this.chag = <any>this.sidebarService.change.subscribe(res => {
			this.menuData = res;
		});
		this.getMenudata();
	}

	/**
	 * 获取菜单数据
	 */
	getMenudata() {
		this.handleMenuData();
	}

	/**
	 * 处理搜索框菜单数据
	 */
	handleMenuData() {
		this.data = this.menuData;
		this.allData = this.menuData;
		this.dataArray = [];
		this.formatDataToArray(this.menuData, null);
		if (this.activeMenu == null) {
			return;
		}
		// 设置菜单树展开状态（主要是刷新恢复菜单状态时使用）
		this.setMenuTreeExpand(this.activeMenu);
		// // 当前页面名称
		// this.appService.titleEventEmitter.emit(this.activeMenu.name);
	}

	/**
	 * 将json树结构对象整理为数组
	 * @param arry
	 */
	formatDataToArray(arry: any[], parent: MenuData) {
		for (const entry of arry) {
			const item = {
				id: entry.id,
				icon: entry.icon,
				name: entry.name,
				keyWord: entry.keyWord,
				parent: parent,
				parentName: parent == null ? '' : parent.name,
				searchText: entry.id + '/' + entry.name + '/' + entry.keyWord,
			};
			entry.parent = parent;
			// 记录当前路由所对应的节点
			if ('/' + entry.url === this.router.url) {
				this.activeMenu = item;
			}
			this.dataArray.push(item);
			if (entry.children) {
				this.formatDataToArray(entry.children, entry);
			}
		}
	}

	/**
	 * 根据传入节点，依次展开父节点
	 * @param menuItem
	 */
	setMenuTreeExpand(menuItem) {
		menuItem.isExpend = true;
		if (menuItem.parent) {
			this.setMenuTreeExpand(menuItem.parent);
		}
	}

	/**
	 * 重置菜单
	 */
	reset() {
		this.searchTxt = '';
		this.searchMenu();
	}

	/**
	 * 输入框变化事件
	 * @param newValue
	 */
	valuechange(newValue) {
		if (newValue === '') {
			this.reset();
		}
	}

	/**
	 * 选择搜索
	 * @param e
	 */
	public typeaheadOnSelect(e: TypeaheadMatch): void {
		console.log('Selected value: ', e.value);
		this.searchTxt = e.value.split('/')[1];
		this.searchMenu();
	}

	/**
	 * 是否有子节点
	 * @param item
	 */
	isLeaf(item: MenuData) {
		return !item.children || !item.children.length;
	}

	/**
	 * 点击
	 * @param item
	 */
	itemClicked(item: MenuData) {
		if (!this.isLeaf(item)) {
			for (const obj of this.data) {
				if (obj.id !== item.id) {
					obj.isExpend = false;
				}
			}
			item.isExpend = !item.isExpend;
		}
		// if (item.url != null) {
		//   this.appService.titleEventEmitter.emit(item.name);
		// }
	}

	/**
	 * 查询菜单
	 */
	searchMenu() {
		const tempData = this.allData;
		this.searchTxt = this.searchTxt.trim();
		this.searchMsgHidden = true;

		if ('' !== this.searchTxt) {
			const keyWord = new RegExp(this.searchTxt);
			const menuList = Array<MenuData>();
			const menuIdList = Array<string>();

			for (const item of tempData) {
				this.searchItem(item, menuList, menuIdList, keyWord);
			}
			if (menuList.length > 0) {
				this.data = menuList;
			} else {
				this.searchMsgHidden = false;
			}

		} else {
			this.data = this.allData;
		}
	}

	/**
	 * 查询子菜单
	 * @param item
	 * @param menuList
	 */
	searchItem(item: MenuData, menuList: Array<MenuData>, menuIdList: Array<string>, keyWord: RegExp) {
		item.isExpend = false;
		// 关键字匹配，并且不在列表中的
		if ((item.name.match(keyWord) || item.keyWord.match(keyWord)) && !this.checkSearchMenuIdExists(item.id, menuIdList)) {
			menuList.push(item);
			this.pushSearchMenu(item, menuIdList);
		}

		// 存在子菜单的，递归子菜单
		const itemChildren = item.children;
		if (itemChildren && itemChildren.length > 0) {
			for (const subItem of itemChildren) {
				this.searchItem(subItem, menuList, menuIdList, keyWord);
			}
		}

	}

	/**
	 * 添加查询的菜单
	 * @param item
	 * @param menuIdList
	 */
	pushSearchMenu(item: MenuData, menuIdList: Array<string>) {
		menuIdList.push(item.id);
		const itemChildren = item.children;
		if (itemChildren && itemChildren.length > 0) {
			for (const subItem of itemChildren) {
				this.pushSearchMenu(subItem, menuIdList);
			}
		}
	}

	/**
	 *
	 * @param id 检查菜单id是否存在
	 * @param menuIdList
	 */
	checkSearchMenuIdExists(id, menuIdList: Array<string>) {
		for (const menuId of menuIdList) {
			if (menuId === id) {
				return true;
			}
		}
		return false;
	}
}
