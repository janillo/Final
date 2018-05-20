import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectNewComponent } from './project-new/project-new.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectComponent } from './project/project.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ModalOptionComponent } from '../shared/modal-option/modal-option/modal-option.component';

@NgModule({
	imports: [ CommonModule, ProjectsRoutingModule, SharedModule, FlexLayoutModule ],
	declarations: [
		ProjectNewComponent,
		ProjectListComponent,
		ProjectComponent,
		ProjectEditComponent
	],
	entryComponents: [ ModalOptionComponent ]
})
export class ProjectsModule {}
