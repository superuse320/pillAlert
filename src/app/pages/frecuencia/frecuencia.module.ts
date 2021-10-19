import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrecuenciaPageRoutingModule } from './frecuencia-routing.module';

import { FrecuenciaPage } from './frecuencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrecuenciaPageRoutingModule
  ],
  declarations: [FrecuenciaPage]
})
export class FrecuenciaPageModule {}
