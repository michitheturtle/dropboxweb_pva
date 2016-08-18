import {BrowserXhr, Http} from "@angular/http";
import {Injectable, Input} from "@angular/core";
/**
 * Created by michael on 14.08.16.
 */

@Injectable()
export class CustomBrowserXhr extends BrowserXhr {
  constructor() {
    super();
  }
  build(): any {
    let xhr = super.build();
    xhr.responseType = "blob";
    return <any>(xhr);
  }
}

