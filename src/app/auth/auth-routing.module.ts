import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [

  {
    path: 'login',
    component: SigninComponent
  },

  {
    path: 'register',
    component: SignupComponent
  },

  // { path: 'profile', component: UserProfileComponent },

  {
    path: '**',
    redirectTo : 'login',
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
