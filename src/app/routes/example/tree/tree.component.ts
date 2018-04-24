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

	constructor() {
	}

	ngOnInit() {
	}

}
