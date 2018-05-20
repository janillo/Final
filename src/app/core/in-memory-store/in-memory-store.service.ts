import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryStoreService implements InMemoryDbService {
	createDb() {
		const employees = [
			{
				id: 1,
				name: 'Nikola Tesla',
				company: 'Uno',
				age: 25,
				birthday: '',
				color: '#00fdff',
				project: 1
			},
			{
				id: 2,
				name: 'Elon Musk',
				company: 'Dos',
				age: 28,
				birthday: '',
				color: '#00fdff',
				project: 1
			},
			{
				id: 3,
				name: 'Isaac Newton',
				company: 'Tres',
				age: 30,
				birthday: '',
				color: '#00fdff',
				project: 2
			}
		];
		const projects = [
			{ id: 1, name: 'RAR', teamSize: 2, clientName: 'Linux' },
			{ id: 2, name: 'ZIP', teamSize: 1, clientName: 'Windows' },
			{ id: 3, name: 'GZIP', teamSize: 0, clientName: 'IBM' }
		];
		return { employees, projects };
	}
}
