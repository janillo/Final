import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../core/authentication-service/authentication.service';
import { Router } from '@angular/router';
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
	form: FormGroup;
	formSubmit: boolean;

	constructor(
		private fb: FormBuilder,
		private authenticationService: AuthenticationService,
		private router: Router
	) {}

	ngOnInit() {
		this.form = this.fb.group({
			userName: [ '', Validators.required ],
			userPassword: [ '', Validators.required ]
		});
	}

	isValidInput(field: string) {
		return (
			(!this.form.get(field).valid && this.form.get(field).touched) ||
			(this.form.get(field).untouched && this.formSubmit)
		);
	}

	onSubmit() {
		if (this.form.valid) {
			this.authenticationService.login(this.form.value);
		}
		this.formSubmit = true;
	}
}
