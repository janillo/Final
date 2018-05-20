import { combineAll } from 'rxjs/operators';

export class Employee {
	id?: string;
	name: string;
	company: string;
	age: number;
	birthday: string;
	color: string;
	project: number;
	projectFull?: {};

	constructor(
		id: string,
		name: string,
		company: string,
		age: number,
		birthday: string,
		color: string,
		project: number,
		projectFull: {}
	) {
		this.id = id;
		this.name = name;
		this.company = company;
		this.age = age;
		this.birthday = birthday;
		this.color = color;
		this.project = project;
		this.projectFull = projectFull;
	}
}
