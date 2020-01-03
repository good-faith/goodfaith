import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/src/lib/auth.service';

@Component({
  selector: 'app-callback',
  template: `<div>Loading...</div>`,
  styles: []
})
export class CallbackComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.handleLoginCallback();
  }

}