import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, forkJoin } from 'rxjs';
import { catchError, map, flatMap } from 'rxjs/operators';
import { Project } from '../models/project.model';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
	providedIn: 'root'
})
export class ProjectsService {
	private employeesUrl = 'api/employees';
	private projectsUrl = 'api/projects';

	constructor(private http: HttpClient) {}

	getProject(id: any): Observable<any> {
		return this.http.get(`${this.projectsUrl}/${id}`).pipe(
			flatMap((project: any) => {
				return this.http.get(`${this.employeesUrl}?project=${project.id}`).pipe(
					map((res: any) => {
						project.teamSize = res.length;
						return project;
					})
				);
			})
		);
	}

	postProject(project: Project): Observable<Project> {
		return this.http
			.post<Project>(this.projectsUrl, project)
			.pipe(map((response: any) => response));
	}

	putProject(project: Project): Observable<any> {
		return this.http
			.put(this.projectsUrl, project, httpOptions)
			.pipe(catchError(this.handleError<any>('update Project ${projet}')));
	}

	deleteproject(id): Observable<Project> {
		return this.http
			.delete<Project>(`${this.projectsUrl}/${id}`)
			.pipe(catchError(this.handleError<any>('Delete projet ${id}')));
	}

	getProjectsFull(): Observable<any> {
		return this.http.get(this.projectsUrl).pipe(
			flatMap((projects: Project[]) => {
				if (projects.length > 0) {
					return forkJoin(
						projects.map((project: any) => {
							return this.http.get(`${this.employeesUrl}?project=${project.id}`).pipe(
								map((res: any) => {
									project.teamSize = res.length;
									return project;
								})
							);
						})
					);
				}
				return of([]);
			})
		);
	}

	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error);
			console.log(`${operation} failed: ${error.message}`);
			return of(result as T);
		};
	}
}
