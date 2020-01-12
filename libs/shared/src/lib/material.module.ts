import {NgModule} from '@angular/core'
import {
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule
  } from '@angular/material';

  @NgModule({
    imports: [
      MatInputModule,
      MatButtonModule,
      MatSelectModule,
      MatToolbarModule
    ],
    exports: [
      MatInputModule,
      MatButtonModule,
      MatSelectModule,
      MatToolbarModule
    ]
  })
  export class AppMaterialModule { }
