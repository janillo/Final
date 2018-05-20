import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeNewComponent } from './employee-new/employee-new.component';
import { EmployeeComponent } from './employee/employee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';

const routes: Routes = [
	{
		path: '',
		component: EmployeeComponent,
		children: [
			{ path: '', component: EmployeeListComponent },
			{ path: 'new', component: EmployeeNewComponent },
			{ path: ':id', component: EmployeeEditComponent }
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class EmployeesRoutingModule {}
