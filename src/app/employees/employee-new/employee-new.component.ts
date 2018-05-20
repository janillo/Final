import { Employee } from './../models/employee.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { EmployeesService } from '../services/employees.service';
import { Project } from '../../projects/models/project.model';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
@Component({
	selector: 'app-employee-new',
	templateUrl: './employee-new.component.html',
	styleUrls: [ './employee-new.component.scss' ]
})
export class EmployeeNewComponent implements OnInit {
	form: FormGroup;
	formSubmit: boolean;
	projects: Project[];

	constructor(
		private fb: FormBuilder,
		private employeesService: EmployeesService,
		private router: Router,
		private route: ActivatedRoute,
		public snackBar: MatSnackBar
	) {}

	ngOnInit() {
		this.form = this.fb.group({
			name: [ null, Validators.required ],
			company: [ null, Validators.required ],
			age: [ null, Validators.required ],
			birthday: [ null, Validators.required ],
			project: [ null, Validators.required ],
			color: [ null, Validators.required ]
		});

		this.employeesService.getProjects().subscribe((data) => (this.projects = data));
	}

	isValidInput(field: string) {
		return (
			(!this.form.get(field).valid && this.form.get(field).touched) ||
			(this.form.get(field).untouched && this.formSubmit)
		);
	}

	onSubmit(formData: any, formDirective: FormGroupDirective) {
		this.formSubmit = true;
		if (this.form.valid) {
			const employee = this.prepareSaveEmployee();
			this.employeesService
				.postEmployee(employee)
				.subscribe((res) => this.openSnackBar('Empleado Guardado', 'Bien!'));
		}
		formDirective.resetForm();
		this.form.reset();
	}

	resetForm(formData: any, formDirective: FormGroupDirective) {
		formDirective.resetForm();
		this.form.reset();
	}

	prepareSaveEmployee(): Employee {
		const formModel = this.form.value;

		const saveEmployee: Employee = {
			name: formModel.name as string,
			company: formModel.company as string,
			age: formModel.age as number,
			birthday: formModel.birthday as string,
			color: formModel.color as string,
			project: formModel.project as number
		};

		return saveEmployee;
	}

	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 2000
		});
	}
}
