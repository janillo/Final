import { Employee } from './../models/employee.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { Project } from '../../projects/models/project.model';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeesService } from '../services/employees.service';
import { MatSnackBar } from '@angular/material';

@Component({
	selector: 'app-employee-edit',
	templateUrl: './employee-edit.component.html',
	styleUrls: [ './employee-edit.component.scss' ]
})
export class EmployeeEditComponent implements OnInit {
	form: FormGroup;
	formSubmit: boolean;
	projects: Project[];
	employee: Employee;

	constructor(
		private fb: FormBuilder,
		private employeesService: EmployeesService,
		private router: Router,
		private route: ActivatedRoute,
		public snackBar: MatSnackBar
	) {
		this.createForm();
	}

	ngOnInit() {
		this.route.params.subscribe((param) => {
			this.employeesService.getEmployee(param['id']).subscribe((data) => this.loadForm(data));
		});

		this.employeesService.getProjects().subscribe((data) => (this.projects = data));
	}

	createForm() {
		this.form = this.fb.group({
			id: [ null ],
			name: [ null, Validators.required ],
			company: [ null, Validators.required ],
			age: [ null, Validators.required ],
			birthday: [ null, Validators.required ],
			project: [ null, Validators.required ],
			color: [ null, Validators.required ]
		});
	}

	loadForm(employee: Employee) {
		this.form.get('id').setValue(employee.id);
		this.form.get('name').setValue(employee.name);
		this.form.get('company').setValue(employee.company);
		this.form.get('age').setValue(employee.age);
		this.form.get('birthday').setValue(employee.birthday);
		this.form.get('project').setValue(employee.project);
		this.form.get('color').setValue(employee.color);
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
			console.log(employee);
			this.employeesService
				.putEmployee(employee)
				.subscribe((res) => this.openSnackBar('Empleado Actualizado', 'Bien!'));
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
			id: formModel.id as string,
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
