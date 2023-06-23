import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FolderPageModule } from './folder/folder.module';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', loadChildren: () => import ('./login/login.module').then( m => m.LoginPageModule)},
  { path: 'home', loadChildren: () => import ('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'multimedia',
    loadChildren: () => import('./multimedia/multimedia.module').then( m => m.MultimediaPageModule)
  },
  {
    path: 'proyectos',
    loadChildren: () => import('./proyectos/proyectos.module').then( m => m.ProyectosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
