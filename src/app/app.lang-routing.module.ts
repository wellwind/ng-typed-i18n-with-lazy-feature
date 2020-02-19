import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)
    },
    {
        path: '',
        loadChildren: () => import('./features/layout/layout.module').then(m => m.LayoutModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppLangRoutingModule { }
