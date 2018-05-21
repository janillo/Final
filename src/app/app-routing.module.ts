import { NotFoundComponent } from './shared/not-found/not-found.component';
import { AuthenticationGuard } from './core/authentication-guard/authentication.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: './layout/layout.module#LayoutModule',
		canActivate: [ AuthenticationGuard ]
	},
	{ path: 'login', loadChildren: './authentication/authentication.module#AuthenticationModule' },
	{ path: '404', component: NotFoundComponent },
	{ path: '**', redirectTo: '/404' }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
