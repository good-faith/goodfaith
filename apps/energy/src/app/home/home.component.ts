import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'energy-app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'apps/energy';

  constructor() { }

  ngOnInit() {
  }
}
