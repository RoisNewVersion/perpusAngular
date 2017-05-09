import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.routes'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SimpleNotificationsModule } from 'angular2-notifications';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
// component
import { DashboardComponent } from './dashboard/dashboard.component';
import { RakComponent } from './rak/rak.component';
import { AnggotaComponent } from './anggota/anggota.component';
import { BukuComponent } from './buku/buku.component';
import { KategoriComponent } from './kategori/kategori.component';
import { DendaComponent } from './denda/denda.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './service/auth-guard.service';
import { AuthService } from './service/auth.service';

import { AuthHttp, AuthConfig  } from 'angular2-jwt';
export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RakComponent,
    AnggotaComponent,
    BukuComponent,
    KategoriComponent,
    DendaComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    NgbModule.forRoot(),
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    AuthGuard,
    AuthService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
