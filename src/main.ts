import {enableProdMode, ViewEncapsulation} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const body = document.querySelector('body');
const preloader = document.querySelector('.preloader');
body.style.overflow = 'hidden';
const remove = () => {
  if (!preloader) {
    return;
  }
  preloader.addEventListener('transitionend', function () {
    preloader.className = 'preloader-hidden';
  });
  preloader.className += ' preloader-hidden-add preloader-hidden-add-active';
};
const appBootstrap = () => {
  setTimeout(function () {
    remove();
    body.style.overflow = '';
  }, 500);
};

const bootstrap = () => {
  return platformBrowserDynamic().bootstrapModule(AppModule, {
    defaultEncapsulation: ViewEncapsulation.Emulated,
    preserveWhitespaces: false
  });
};

bootstrap().then(() => {
  if (appBootstrap) {
    appBootstrap();
  }
});

// platformBrowserDynamic().bootstrapModule(AppModule);
// 1.defaultEncapsulation
// ViewEncapsulation.None - 根本没有Shadow DOM。所以也没有样式封装。
// ViewEncapsulation.Emulated - 没有Shadow DOM，但是风格封装仿真。
// ViewEncapsulation.Native - 原生的影子DOM的所有的善良。
// 2.preserveWhitespaces true:删除页面多余空格  false
