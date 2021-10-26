import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'patient',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/patient/list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        loadChildren: () => import('../list/list.module').then(m => m.ListPageModule)
      },
      {
        path: 'create',
        loadChildren: () => import('../create/create.module').then( m => m.CreatePageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: '/patient/list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
