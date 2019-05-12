import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/router'
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';

export const AdminDashboardRoutes: Route[] = [{
  path: '', component: DashboardViewComponent
}];


@NgModule({
  declarations: [DashboardViewComponent],
  imports: [
    CommonModule
  ]
})
export class AdminDashboardModule { }
