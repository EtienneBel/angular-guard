import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedin = false;
  asRole: string = "";

  constructor(private _router: Router) { }

  loginAsUser() {
    this.isLoggedin = true;
    this.asRole = "ROLE_USER";
    this._router.navigate(['products']);
  }

  loginAsAdmin() {
    this.isLoggedin = true;
    this.asRole = "ROLE_ADMIN";
    this._router.navigate(['products']);
  }

  logout() {
    this.isLoggedin = false;
    this._router.navigate(['home']);
  }

}
