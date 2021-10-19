import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DuracionPage } from './duracion.page';

const routes: Routes = [
  {
    path: '',
    component: DuracionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DuracionPageRoutingModule {}
