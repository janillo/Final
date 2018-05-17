import { AuthenticationService } from './authentication-service/authentication.service';
import { AuthenticationGuard } from './authentication-guard/authentication.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
	imports: [ CommonModule ],
	declarations: [ AuthenticationGuard, AuthenticationService ]
})
export class CoreModule {}
