import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductoPage } from './producto.page';
import { ModalLlamadaPage } from '../modal-llamada/modal-llamada.page';
import { ModalLlamadaPageModule } from '../modal-llamada/modal-llamada.module';

const routes: Routes = [
  {
    path: '',
    component: ProductoPage
  }
];

@NgModule({
  entryComponents: [
    ModalLlamadaPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ModalLlamadaPageModule
  ],
  declarations: [ProductoPage]
})
export class ProductoPageModule {}
