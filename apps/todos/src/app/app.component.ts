import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../libs/auth/src/lib/auth.service';

@Component({
  selector: 'goodfaith-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit() {
    // If there is an active session on the
    // authorization server, get tokens
    this.auth.renewAuth();
  }
}
