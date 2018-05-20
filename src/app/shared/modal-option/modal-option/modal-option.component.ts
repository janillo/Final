import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
	selector: 'app-modal-option',
	templateUrl: './modal-option.component.html',
	styleUrls: [ './modal-option.component.scss' ]
})
export class ModalOptionComponent implements OnInit {
	form: FormGroup;
	constructor(
		private formBuilder: FormBuilder,
		public dialogRef: MatDialogRef<ModalOptionComponent>,
		@Inject(MAT_DIALOG_DATA) private data
	) {}

	ngOnInit() {}

	submit() {
		this.dialogRef.close(`${this.data.id}`);
	}
}
