import {Component, Input, OnInit} from '@angular/core';
import {MenuData} from "../model/mainModel";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-treeview-menu',
  templateUrl: './treeview-menu.component.html',
  styleUrls: ['./treeview-menu.component.scss']
})
export class TreeviewMenuComponent implements OnInit {

  @Input() data: Array<MenuData>;

  constructor(private router: Router,
              private route: ActivatedRoute,) {
    // this.appService.activeMenuEventEmitter.subscribe(name => {
    //   if (this.data['name'] === name) {
    //     this.appService.titleEventEmitter.emit(name);
    //     this.data['parent'].isExpend = true;
    //   } else if (this.data['parent']) {
    //     this.data['parent'].isExpend = false;
    //   }
    // });
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
      item.isExpend = !item.isExpend;
    }
    // if (item.url != null) {
    //   this.appService.titleEventEmitter.emit(item.name);
    // }
  }

  ngOnInit() {
  }

}
