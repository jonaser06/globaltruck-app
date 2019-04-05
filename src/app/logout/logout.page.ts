import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private navCtrl: NavController, private storage : Storage) { }

  ngOnInit() {
    this.logoutSesion();
  }

  logoutSesion(){
    this.storage.remove('token');
    setInterval(function(){
      location.href="home";
    },1500);
  }
}
