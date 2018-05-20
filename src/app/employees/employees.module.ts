import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeNewComponent } from './employee-new/employee-new.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { SharedModule } from '../shared/shared.module';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { ModalOptionComponent } from '../shared/modal-option/modal-option/modal-option.component';

@NgModule({
	imports: [ CommonModule, EmployeesRoutingModule, SharedModule, FlexLayoutModule ],
	declarations: [
		EmployeeNewComponent,
		EmployeeListComponent,
		EmployeeComponent,
		EmployeeEditComponent
	],
	entryComponents: [ ModalOptionComponent ]
})
export class EmployeesModule {}
