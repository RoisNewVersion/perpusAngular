import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map';
import { baseUrl, urls } from './url.service';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

    constructor(private http: Http, private router: Router) { }

    login(u: any, p: any): Observable<any> {
        return this.http.post(baseUrl + urls.login, { email: u, password: p })
            .map(res => res.json())
    }

    logout() {
        localStorage.removeItem('token')
    }

    // check login and available
    loggedIn() {
        return tokenNotExpired();
    }

    // check sudah login
    checkLogin() {
        if (tokenNotExpired()) {
            this.router.navigateByUrl('dashboard')
        }
    }
}