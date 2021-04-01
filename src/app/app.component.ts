import { Component } from '@angular/core';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  handleLoginAsUser() {
    this.authService.loginAsUser();
  }

  handleLoginAsAdmin() {
    this.authService.loginAsAdmin();
  }

  handleLogout() {
    this.authService.logout();
  }

}
