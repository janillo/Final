import { MatSnackBar } from '@angular/material';
import { Project } from './../models/project.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { ProjectsService } from '../services/projects.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-project-edit',
	templateUrl: './project-edit.component.html',
	styleUrls: [ './project-edit.component.scss' ]
})
export class ProjectEditComponent implements OnInit {
	form: FormGroup;
	formSubmit: boolean;
	project: Project;

	constructor(
		private fb: FormBuilder,
		private projectsService: ProjectsService,
		private router: Router,
		private route: ActivatedRoute,
		public snackBar: MatSnackBar
	) {
		this.createForm();
	}

	ngOnInit() {
		this.route.params.subscribe((param) => {
			this.projectsService.getProject(param['id']).subscribe((data) => this.loadForm(data));
		});
	}

	createForm() {
		this.form = this.fb.group({
			id: [ null ],
			name: [ null, Validators.required ],
			teamSize: [ null, Validators.required ],
			clientName: [ null, Validators.required ]
		});
	}

	loadForm(project: Project) {
		this.form.get('id').setValue(project.id);
		this.form.get('name').setValue(project.name);
		this.form.get('teamSize').setValue(project.teamSize);
		this.form.get('clientName').setValue(project.clientName);
	}

	isValidInput(field: string) {
		return (
			(!this.form.get(field).valid && this.form.get(field).touched) ||
			(this.form.get(field).untouched && this.formSubmit)
		);
	}

	resetForm(formData: any, formDirective: FormGroupDirective) {
		formDirective.resetForm();
		this.form.reset();
	}

	onSubmit(formData: any, formDirective: FormGroupDirective) {
		this.formSubmit = true;
		if (this.form.valid) {
			const project = this.prepareSaveEmployee();
			this.projectsService
				.putProject(project)
				.subscribe((res) => this.openSnackBar('Proyecto Actualizado', 'Bien!'));
		}
		formDirective.resetForm();
		this.form.reset();
	}

	prepareSaveEmployee(): Project {
		const formModel = this.form.value;

		const saveProject: Project = {
			id: formModel.id as string,
			name: formModel.name as string,
			teamSize: formModel.teamSize as number,
			clientName: formModel.clientName as string
		};

		return saveProject;
	}

	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 2000
		});
	}
}
