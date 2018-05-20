import { identifierModuleUrl } from '@angular/compiler';

export class Project {
	id?: string;
	name: string;
	teamSize?: number;
	clientName: string;

	constructor(id: string, name: string, teamSize: number, clientName: string) {
		this.id = id;
		this.name = name;
		this.teamSize = teamSize;
		this.clientName = clientName;
	}
}
