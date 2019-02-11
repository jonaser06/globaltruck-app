import { Component } from '@angular/core';

import { Device } from '@ionic-native/device/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  SO: string;
  version: string;
  UUID: string;
  constructor (public device: Device){
    this.SO = device.platform;
    this.version = device.version;
    this.UUID = device.uuid;
  }

}
