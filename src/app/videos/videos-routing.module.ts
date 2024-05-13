import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {
    path: '',
    component : IndexComponent
  },
  
  {
    path: 'create',
    component : AddComponent
  },
  
  {
    path: 'edit/:{id}',
    component : EditComponent
  },

  {
    path:'**',
    redirectTo : '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideosRoutingModule { }
