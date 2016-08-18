
import { bootstrap } from '@angular/platform-browser-dynamic';
import {enableProdMode, provide} from '@angular/core';
import { DropboxviewAppComponent, environment } from './app/';
import {HTTP_PROVIDERS, BrowserXhr} from '@angular/http';
import {CustomBrowserXhr} from "./app/CustomBrowserXhr";

if (environment.production) {
  enableProdMode();
}

bootstrap(DropboxviewAppComponent,
  [
    HTTP_PROVIDERS
   // ,provide(BrowserXhr, { useClass: CustomBrowserXhr })
  ]);
