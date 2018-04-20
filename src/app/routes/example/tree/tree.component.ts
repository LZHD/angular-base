import {Component, OnInit} from '@angular/core';
import {ITreeOptions, KEYS, TREE_ACTIONS} from "angular-tree-component";

@Component({
	selector: 'app-tree',
	templateUrl: './tree.component.html',
	styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
	nodes = [
		{
			id: 1,
			name: 'root1',
			children: [
				{id: 2, name: 'child1'},
				{id: 3, name: 'child2'}
			]
		},
		{
			id: 4,
			name: 'root2',
			children: [
				{id: 5, name: 'child2.1'},
				{
					id: 6,
					name: 'child2.2',
					children: [
						{id: 7, name: 'subsub'}
					]
				}
			]
		}
	];
	options: ITreeOptions = {
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

	constructor() {
	}

	ngOnInit() {
	}

}
