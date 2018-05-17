import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Component({
	selector: 'home-nav',
	templateUrl: './home-nav.component.html',
	styleUrls: [ './home-nav.component.scss' ]
})
export class HomeNavComponent {
	isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
	constructor(private breakpointObserver: BreakpointObserver) {}
}
