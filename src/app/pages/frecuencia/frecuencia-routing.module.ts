import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrecuenciaPage } from './frecuencia.page';

const routes: Routes = [
  {
    path: '',
    component: FrecuenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrecuenciaPageRoutingModule {}
