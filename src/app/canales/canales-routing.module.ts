import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowComponent } from './show/show.component';
import { CreateComponent } from './create/create.component';
import { CanalGuard } from './guards/canal.guard';

const routes: Routes = [
  {
    path: '',
    component : ShowComponent,
    canActivate : [CanalGuard]
  },
  
  {
    path: 'create',
    component : CreateComponent
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
export class CanalesRoutingModule { }
