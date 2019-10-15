import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(
    private userService: UserService, 
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      const logged = this.userService.isLogged();

      if (!logged) {
        this.router.navigate(['user', 'login'])
      }

      return logged;

  }
  
}
