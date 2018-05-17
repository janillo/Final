import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeesService } from '../services/employees.service';
import { Project } from '../../projects/models/project.model';

@Component({
	selector: 'app-employee-form',
	templateUrl: './employee-form.component.html',
	styleUrls: [ './employee-form.component.scss' ]
})
export class EmployeeFormComponent implements OnInit {
	form: FormGroup;
	formSubmit: boolean;
	projects: Project[];

	constructor(private fb: FormBuilder, private employeesService: EmployeesService) {}

	ngOnInit() {
		this.form = this.fb.group({
			name: [ '', Validators.required ],
			company: [ '', Validators.required ],
			age: [ '', Validators.required ],
			birthdate: [ '', Validators.required ],
			project: [ '', Validators.required ],
			color: [ '', Validators.required ]
		});

		this.employeesService.getProjects().subscribe((data) => (this.projects = data));
	}

	isValidInput(field: string) {
		return (
			(!this.form.get(field).valid && this.form.get(field).touched) ||
			(this.form.get(field).untouched && this.formSubmit)
		);
	}

	onSubmit() {
		if (this.form.valid) {
			console.log(this.form);
		}
		this.formSubmit = true;
	}
}
