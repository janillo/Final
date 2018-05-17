import { combineAll } from 'rxjs/operators';

export class Employee {
	id?: string;
	name: string;
	company: string;
	age: number;
	birthday: string;
	color: string;
	project: number;

	constructor(
		id: string,
		name: string,
		company: string,
		age: number,
		birthday: string,
		color: string,
		project: number
	) {
		this.id = id;
		this.name = name;
		this.company = company;
		this.age = age;
		this.birthday = birthday;
		this.color = color;
		this.project = project;
	}
}
