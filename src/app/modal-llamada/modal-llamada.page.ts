import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-modal-llamada',
  templateUrl: './modal-llamada.page.html',
  styleUrls: ['./modal-llamada.page.scss'],
})

export class ModalLlamadaPage implements OnInit {

  constructor(private callNumber : CallNumber, private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salirSinArgumentos(){
    this.modalCtrl.dismiss();
  }

  llamara(num){
    this.callNumber.callNumber(num, true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }

}
