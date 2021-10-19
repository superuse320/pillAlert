import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DuracionPageRoutingModule } from './duracion-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { DuracionPage } from './duracion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DuracionPageRoutingModule 
    ,ReactiveFormsModule
  ],
  declarations: [DuracionPage]
})
export class DuracionPageModule {}
