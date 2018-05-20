import { AuthenticationService } from './../authentication-service/authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
	constructor(private authenticationService: AuthenticationService, private router: Router) {}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
		return this.authenticationService.isUserLoggedIn.pipe(
			take(1),
			map((isUserLoggedIn: boolean) => {
				if (!isUserLoggedIn) {
					this.router.navigate([ '/login' ]);
					return false;
				}
				return true;
			})
		);
	}
}
