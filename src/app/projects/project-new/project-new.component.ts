import { Project } from './../models/project.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { ProjectsService } from '../services/projects.service';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
	selector: 'app-project-form',
	templateUrl: './project-new.component.html',
	styleUrls: [ './project-new.component.scss' ]
})
export class ProjectNewComponent implements OnInit {
	form: FormGroup;
	formSubmit: boolean;

	constructor(
		private fb: FormBuilder,
		private projectService: ProjectsService,
		public snackBar: MatSnackBar
	) {}

	ngOnInit() {
		this.form = this.fb.group({
			name: [ null, Validators.required ],
			clientName: [ null, Validators.required ]
		});
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
			const project = this.prepareSaveProject();
			this.projectService
				.postProject(project)
				.subscribe((res) => this.openSnackBar('Proyecto Guardado', 'Bien!'));
		}
		formDirective.resetForm();
		this.form.reset();
	}

	resetForm(formData: any, formDirective: FormGroupDirective) {
		formDirective.resetForm();
		this.form.reset();
	}

	prepareSaveProject(): Project {
		const formModel = this.form.value;

		const saveProject: Project = {
			name: formModel.name as string,
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
