import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from '../../../../libs/auth/src/lib/auth.guard';
import { InterceptorService } from '../../../../libs/auth/src/lib/secure.interceptor';

// tslint:disable-next-line: nx-enforce-module-boundaries
import { HomeComponent } from '../../../../libs/ui/src/lib/home/home.component';
import { CallbackComponent } from '../../../../libs/utils/src';
// tslint:disable-next-line: nx-enforce-module-boundaries
import { ProfileComponent } from '../../../../libs/ui/src/lib/profile/profile.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'callback',
        component: CallbackComponent
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [
          AuthGuard
        ]
      },
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
      }
    ])
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}