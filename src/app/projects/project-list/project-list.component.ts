import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { ProjectsService } from '../services/projects.service';
import { Project } from '../models/project.model';
import { ModalOptionComponent } from '../../shared/modal-option/modal-option/modal-option.component';

@Component({
	selector: 'app-project-list',
	templateUrl: './project-list.component.html',
	styleUrls: [ './project-list.component.scss' ]
})
export class ProjectListComponent implements OnInit {
	displayedColumns = [ 'id', 'name', 'clientName', 'teamSize', 'buttons' ];
	dataSource: MatTableDataSource<Project>;
	isLoadingResults = true;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	constructor(private projectsService: ProjectsService, public dialog: MatDialog) {}

	ngOnInit() {
		this.refresh();
	}

	openDialog(employee): any {
		const dialogAdd = this.dialog.open(ModalOptionComponent, {
			width: '300px',
			data: {
				name: employee.name,
				id: employee.id
			}
		});
		dialogAdd.afterClosed().subscribe((result) => {
			this.projectsService.deleteproject(result).subscribe((res) => {
				this.refresh();
			});
		});
	}

	refresh() {
		this.isLoadingResults = true;
		this.projectsService.getProjectsFull().subscribe((data) => {
			this.isLoadingResults = false;
			this.dataSource = new MatTableDataSource(data);
			this.dataSource.paginator = this.paginator;
			this.dataSource.sort = this.sort;
		});
	}

	applyFilter(filterValue: string) {
		filterValue = filterValue.trim();
		filterValue = filterValue.toLowerCase();
		this.dataSource.filter = filterValue;
	}
}
