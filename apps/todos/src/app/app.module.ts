import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { UiModule } from '@goodfaith/ui';
import { ApiService } from '../../../../libs/utils/src';
import { AuthService } from '../../../../libs/auth/src/lib/auth.service';

import { CallbackComponent } from '../../../../libs/utils/src';



@NgModule({
  declarations: [
    AppComponent, 
    CallbackComponent,
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    UiModule, 
    AppRoutingModule
  ],
  providers: [
    ApiService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
