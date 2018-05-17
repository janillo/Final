import { AuthenticationService } from './authentication-service/authentication.service';
import { AuthenticationGuard } from './authentication-guard/authentication.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InMemoryStoreService } from './in-memory-store/in-memory-store.service';

@NgModule({
	imports: [ CommonModule ],
	declarations: [ AuthenticationGuard, AuthenticationService, InMemoryStoreService ]
})
export class CoreModule {}
