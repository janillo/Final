import { Project } from './../../projects/models/project.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class EmployeesService {
	constructor(private http: HttpClient) {}

	getProjects(): Observable<Project[]> {
		return this.http
			.get<Project[]>('api/projects')
			.pipe(catchError((error: any) => Observable.throw(error.json())));
	}
}
