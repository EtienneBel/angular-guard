import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  user: User = new User;
  constructor(private _authService: AuthService, private _router: Router) {
  }

  canActivate(
    nextRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.user.role = this._authService.asRole;
    if (this.user.role === nextRoute.data.role) {
      return true;
    }
    // navigate to not found page
    this._router.navigate(['/unauthorized']);
    return false;
  }

}
