import { Component, inject } from '@angular/core';
import { AuthStateService } from './shared/auth-state.service';
import { AuthService, User } from './shared/auth.service';
import { TokenService } from './shared/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyPM_API';

  private authStatusService = inject(AuthStateService);
  private authService = inject(AuthService);
  private token = inject(TokenService);
  private route = inject(Router);


  status : boolean = false;

  user ?: any;

  ngOnInit(){
    this.authStatusService.userAuthState.subscribe(data =>this.status = data);
    this.user = this.authService.getUser() as User;
  }

  ngOnChanges(){
    this.authStatusService.userAuthState.subscribe(data =>this.status = data);
    this.user = this.authService.getUser() as User;
  }

  logout(){
    this.token.removeToken();
    this.route.navigateByUrl('auth');
  }
}
