import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../service/auth.service';
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map';
import { User } from '../model/user';
import { RouterModule } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: any;
  password: any;

  constructor(private auth: AuthService, private router: Router, private notif: NotificationsService) { }

  ngOnInit() {
    this.auth.checkLogin();
  }

  // doLogin
  doLogin() {
    this.auth.login(this.email, this.password)
      .subscribe(data => {
        if (data.type == 'success') {
          localStorage.setItem('token', data.token)
          this.notif.success('Berhasil', data.msg)
          this.router.navigateByUrl('/dashboard')
        } else {
          console.log('gak bisa login')
          this.notif.error('Error', data.msg || 'gak bisa login')
        }
      }, err => {
        console.log('error login', err)
        let errorMsg = JSON.parse(err._body)
        // console.log('j', errorMsg)
        
        this.notif.error(err.status +' '+err.statusText, errorMsg.error)
      }
      )
  }
}
