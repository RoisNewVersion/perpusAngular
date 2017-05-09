import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './service/auth-guard.service';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Perpus :) !';
  // notif
  public options = {
    position: ["bottom", "right"],
    timeOut: 5000,
    lastOnBottom: true
  }

  constructor(private auth: AuthService, private router: Router, private notif: NotificationsService) { }

  //check login 
  trueLogin(): boolean {
    return this.auth.loggedIn();
  }
  // logout
  logout() {
    this.auth.logout()
    if (!this.auth.loggedIn()) {
      this.notif.success('Sukses', 'Berhasil logout')
      this.router.navigateByUrl('login');
    }else{
      this.notif.error("Error", 'Gagal Logout')
    }
  }
}
