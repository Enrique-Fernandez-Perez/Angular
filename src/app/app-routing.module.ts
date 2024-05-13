import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { ShowComponent } from './pages/show/show.component';

const routes: Routes = [
  {
    path: '',
    component : IndexComponent,
  },

  {
    path: 'video/:id',
    component : ShowComponent,
  },

  {
    path: 'auth',
    loadChildren : ()=>import('./auth/auth.module').then(m => m.AuthModule)
  },

  {
    path: 'videos',
    loadChildren : ()=>import('./videos/videos.module').then(m => m.VideosModule)
  },

  {
    path:'**',
    redirectTo : '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
