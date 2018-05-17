import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	imports: [ CommonModule, EmployeesRoutingModule, SharedModule, FlexLayoutModule ],
	declarations: [ EmployeeFormComponent, EmployeeListComponent, EmployeeComponent ]
})
export class EmployeesModule {}
