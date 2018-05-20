import { ProjectEditComponent } from './project-edit/project-edit.component';
import { ProjectNewComponent } from './project-new/project-new.component';
import { ProjectComponent } from './project/project.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';

const routes: Routes = [
	{
		path: '',
		component: ProjectComponent,
		children: [
			{ path: '', component: ProjectListComponent },
			{ path: 'new', component: ProjectNewComponent },
			{ path: ':id', component: ProjectEditComponent }
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class ProjectsRoutingModule {}
