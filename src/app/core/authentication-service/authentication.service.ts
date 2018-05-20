import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../../authentication/models/user';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {
	private userLoggedIn = new BehaviorSubject<boolean>(false);

	get isUserLoggedIn() {
		return this.userLoggedIn.asObservable();
	}

	constructor(private router: Router) {}

	login(user: User) {
		if (user.userName === 'admin' && user.userPassword === 'ingresar') {
			this.userLoggedIn.next(true);
			this.router.navigate([ '/' ]);
		}
	}

	logout() {
		this.userLoggedIn.next(false);
		this.router.navigate([ '/login' ]);
	}
}
