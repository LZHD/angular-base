import {Component, OnDestroy, ViewChild} from '@angular/core';
import {AbmComponent} from "angular-baidu-maps";

declare const BMap: any;
declare const BMAP_SATELLITE_MAP: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnDestroy {
  options: any = {};
  status = '';
  @ViewChild('map') mapComp: AbmComponent;
  satelliteOptions: any;
  private mapSatellite: any;
  private _map: any;
  constructor() {
  }

  onReady(map: any) {
    this._map = map;
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
    map.addControl(new BMap.MapTypeControl());
    map.setCurrentCity('北京');
    map.enableScrollWheelZoom(true);
    this.status = '加载完成';
    // 添加监听事件
    map.addEventListener('tilesloaded', () => {
      this.status = '地图加载完毕';
    });
    map.addEventListener('click', this._click.bind(this));
  }

  _click(e: any) {
    this.status = `${e.point.lng}, ${e.point.lat}, ${+new Date}`;
  }

  panTo() {
    this._map.panTo(new BMap.Point(116.404, 39.715));
  }

  zoom() {
    this._map.setZoom((this._map.getZoom() + 1) % 17);
  }

  infoWindow() {
    const infoWin = new BMap.InfoWindow('地址：北京市东城区王府井大街88号乐天银泰百货八层', {
      width: 200,     // 信息窗口宽度
      height: 100,     // 信息窗口高度
      title: '海底捞王府井店', // 信息窗口标题
      enableMessage: true, // 设置允许信息窗发送短息
      message: '亲耐滴，晚上一起吃个饭吧？戳下面的链接看下地址喔~'
    });
    this._map.openInfoWindow(infoWin, this._map.getCenter());
  }

  all() {
    const stCtrl = new BMap.PanoramaControl(); // 构造全景控件
    stCtrl.setOffset(new BMap.Size(18, 40));
    this._map.addControl(stCtrl); // 添加全景控件
  }

  // 卫星
  onReadySatellite(map: any) {
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
    map.setMapType(BMAP_SATELLITE_MAP);
    this.mapSatellite = map;
  }

  ngOnDestroy(): void {
    this._map.removeEventListener('click', this._click.bind(this));
  }
}
