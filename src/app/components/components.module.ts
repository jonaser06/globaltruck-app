import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [AvatarComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
  ,
  exports:[
    AvatarComponent
  ]
})
export class ComponentsModule { }
