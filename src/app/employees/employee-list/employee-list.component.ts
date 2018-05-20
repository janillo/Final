import { Employee } from './../models/employee.model';
import { EmployeesService } from './../services/employees.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { ModalOptionComponent } from '../../shared/modal-option/modal-option/modal-option.component';

@Component({
	selector: 'app-employee-list',
	templateUrl: './employee-list.component.html',
	styleUrls: [ './employee-list.component.scss' ]
})
export class EmployeeListComponent implements OnInit {
	displayedColumns = [ 'id', 'name', 'project', 'color', 'buttons' ];
	dataSource: MatTableDataSource<Employee>;
	isLoadingResults = true;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	constructor(private employeesService: EmployeesService, public dialog: MatDialog) {}

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
			this.employeesService.deleteEmployee(result).subscribe((res) => {
				this.refresh();
			});
		});
	}

	refresh() {
		this.isLoadingResults = true;
		this.employeesService.getEmployeesProject().subscribe((data) => {
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
