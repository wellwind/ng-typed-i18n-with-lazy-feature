import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'en', pathMatch: 'full' },
  {
    path: 'en',
    loadChildren: () => import('./app.en.module').then(m => m.AppEnModule)
  },
  {
    path: 'zh',
    loadChildren: () => import('./app.zh.module').then(m => m.AppZhModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
