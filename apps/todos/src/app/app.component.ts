import { Component } from '@angular/core';

interface Todo {
  title: string;
}

@Component({
  selector: 'goodfaith-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  todos: Todo[] = [{title: 'Todo1'}, { title: 'Todo2'}];
}
