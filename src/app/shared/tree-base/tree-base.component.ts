import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ITreeOptions, KEYS, TREE_ACTIONS} from "angular-tree-component";

@Component({
	selector: 'app-tree-base',
	templateUrl: './tree-base.component.html',
	styleUrls: ['./tree-base.component.scss']
})
export class TreeBaseComponent implements OnInit {
	private selectNodes: any[];
	@Input() public treeOptions: ITreeOptions = this.getDefaultTreeSetting();
	@Input() public treeTitle: string;
	@Input() public nodes: any[];
	@Input() public url: string;
	@Input() public showCheckbox: boolean = false; // 显示选择框
	@Input() public showFilter: boolean = false; // 显示过滤框
	@Input() public treeStyle: object = {};
	@Input() public allowDrag = true; // 允许拖动
	@Input() public autoExpand = false; // 自动展开
	@Output() public onLoadComplete: EventEmitter<any> = new EventEmitter(); // 请求加载完成事件
	@Output() public onActivateNode: EventEmitter<any> = new EventEmitter(); // 激活节点事件
	@Output() public onMoveNode: EventEmitter<any> = new EventEmitter(); // 移动节点事件
	@Output() public onRenderAfter: EventEmitter<any> = new EventEmitter(); // 树渲染完成事件
	@Output() public onCheckboxChange: EventEmitter<any> = new EventEmitter(); // 树checkbox点击事件
	constructor() {
	}

	ngOnInit() {
	}

	private getDefaultTreeSetting(): ITreeOptions {

		return {
			displayField: 'name',
			isExpandedField: 'expanded',
			idField: 'uuid',
			hasChildrenField: 'nodes',
			actionMapping: {
				mouse: {
					dblClick: (tree, node, $event) => {
						if (node.hasChildren) {
							TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
						}
					},
					contextMenu: (tree, node, $event) => {
						$event.preventDefault();
					}
				},
				keys: {
					[KEYS.ENTER]: (tree, node, $event) => {
						node.expandAll();
					}
				}
			},
			nodeHeight: 23,
			allowDrag: (node) => {
				return true;
			},
			allowDrop: (node) => {
				return true;
			},
			useVirtualScroll: true,
			animateExpand: true,
			scrollOnActivate: true,
			animateSpeed: 30,
			animateAcceleration: 1.2
		};
	}

	private check(node, $event) {
		this.updateChildNodesCheckBox(node, $event.target.checked);
		this.updateParentNodesCheckBox(node.parent);

		this.onCheckboxChange.emit();
	}

	private updateChildNodesCheckBox(node, checked) {
		node.data.checked = checked;
		if (node.children) {
			node.children.forEach((child) => this.updateChildNodesCheckBox(child, checked));
		}
	}

	private updateParentNodesCheckBox(node) {
		if (node && node.level > 0 && node.children) {
			let allChildChecked = true;
			let noChildChecked = true;

			for (const child of node.children) {
				if (!child.data.checked) {
					allChildChecked = false;
				} else if (child.data.checked) {
					noChildChecked = false;
				}
			}

			if (allChildChecked) {
				node.data.checked = true;
				node.data.indeterminate = false;
			} else if (noChildChecked) {
				node.data.checked = false;
				node.data.indeterminate = false;
			} else {
				node.data.checked = true;
				node.data.indeterminate = true;
			}
			this.updateParentNodesCheckBox(node.parent);
		}
	}

	public onMove () {

	}

	public treeFilter () {

	}

	public childrenCount () {

	}

	public onActivate () {

	}
}
