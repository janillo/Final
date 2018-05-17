import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			{ path: '', component: HomeDashboardComponent },
			{ path: 'projects', loadChildren: '../projects/projects.module#ProjectsModule' },
			{ path: 'employees', loadChildren: '../employees/employees.module#EmployeesModule' }
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class LayoutRoutingModule {}
