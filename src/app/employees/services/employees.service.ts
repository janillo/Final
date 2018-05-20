import { Employee } from './../models/employee.model';
import { Project } from './../../projects/models/project.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, flatMap } from 'rxjs/operators';
import { Observable, forkJoin, of, throwError } from 'rxjs';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
	providedIn: 'root'
})
export class EmployeesService {
	private employeesUrl = 'api/employees';
	private projectsUrl = 'api/projects';

	constructor(private http: HttpClient) {}

	getProjects(): Observable<Project[]> {
		return this.http
			.get<Project[]>('api/projects')
			.pipe(catchError(this.handleError<any>('Get all projects')));
	}

	postEmployee(employee: Employee): Observable<Employee> {
		return this.http
			.post<Employee>(this.employeesUrl, employee)
			.pipe(map((response: any) => response));
	}

	putEmployee(employee: Employee): Observable<any> {
		return this.http
			.put(this.employeesUrl, employee, httpOptions)
			.pipe(catchError(this.handleError<any>('updateEmployee ${employee}')));
	}

	getEmployees(): Observable<Employee[]> {
		return this.http
			.get<Employee[]>(this.employeesUrl)
			.pipe(catchError(this.handleError<any>('Get all employees')));
	}

	getEmployee(id): Observable<Employee> {
		return this.http
			.get<Employee>(`${this.employeesUrl}/${id}`)
			.pipe(catchError(this.handleError<any>('Get employee ${id}')));
	}

	deleteEmployee(id): Observable<Employee> {
		return this.http
			.delete<Employee>(`${this.employeesUrl}/${id}`)
			.pipe(catchError(this.handleError<any>('Delete employee ${id}')));
	}

	getEmployeesProject(): Observable<any> {
		return this.http.get(this.employeesUrl).pipe(
			flatMap((employees: Employee[]) => {
				if (employees.length > 0) {
					return forkJoin(
						employees.map((employee: any) => {
							return this.http.get(`${this.projectsUrl}/${employee.project}`).pipe(
								map((res: any) => {
									const project: Project = res;
									employee.projectFull = project;
									return employee;
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
