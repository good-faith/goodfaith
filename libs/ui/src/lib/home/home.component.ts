import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiService } from '../../../../../libs/utils/src/lib/api.service';
import { AuthService } from '../../../../auth/src/lib/auth.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items$ = this.api.getItems$();
  user$ = this.auth.userProfile$.pipe(catchError(err => throwError(err)));

  constructor(
    private api: ApiService,
    public auth: AuthService
  ) { }

  ngOnInit() {
  }

}
