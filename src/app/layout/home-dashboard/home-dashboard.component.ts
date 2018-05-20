import { Component } from '@angular/core';
import { ProjectsService } from '../../projects/services/projects.service';

@Component({
	selector: 'home-dashboard',
	templateUrl: './home-dashboard.component.html',
	styleUrls: [ './home-dashboard.component.scss' ]
})
export class HomeDashboardComponent {
	isLoadingResults = true;
	projects = [];
	constructor(private projectsService: ProjectsService) {}

	ngOnInit() {
		this.refresh();
	}

	refresh() {
		this.isLoadingResults = true;
		this.projectsService.getProjectsFull().subscribe((data) => {
			this.isLoadingResults = false;
			this.projects = data;
		});
	}
}
