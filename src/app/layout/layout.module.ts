import { HomeNavComponent } from './home-nav/home-nav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from '../shared/shared.module';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';

@NgModule({
	imports: [ CommonModule, LayoutRoutingModule, SharedModule ],
	declarations: [ LayoutComponent, HomeNavComponent, HomeDashboardComponent ]
})
export class LayoutModule {}
