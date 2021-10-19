import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NoIngresadoGuard} from './guards/no-ingresado.guard';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then(m => m.LoginPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./auth/registro/registro.module').then(m => m.RegistroPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs-routing.module').then(m => m.TabsPageRoutingModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'time',
    loadChildren: () => import('./pages/time/time.module').then(m => m.TimePageModule)
  },
  {
    path: 'alarm',
    loadChildren: () => import('./pages/alarm/alarm.module').then(m => m.AlarmPageModule)
  },
  {
    path: 'duracion',
    loadChildren: () => import('./pages/duracion/duracion.module').then(m => m.DuracionPageModule)
  },
  {
    path: 'frecuencia',
    loadChildren: () => import('./pages/frecuencia/frecuencia.module').then(m => m.FrecuenciaPageModule)
  },
  {
    path: 'cita',
    loadChildren: () => import('./pages/cita/cita.module').then(m => m.CitaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
