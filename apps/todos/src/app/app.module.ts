import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module'

import { ProfileComponent, HomeComponent } from '@goodfaith/ui';
// tslint:disable-next-line: nx-enforce-module-boundaries
import { ApiService } from '../../../../libs/utils/src';
import { AuthService } from '../../../../libs/auth/src/lib/auth.service';

import { AppComponent } from './app.component';
import { CallbackComponent } from '../../../../libs/utils/src';



@NgModule({
  declarations: [
    AppComponent, 
    CallbackComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    ApiService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
