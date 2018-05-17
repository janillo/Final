import { InMemoryStoreService } from './core/in-memory-store/in-memory-store.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
	MatGridListModule,
	MatCardModule,
	MatMenuModule,
	MatIconModule,
	MatButtonModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
	declarations: [ AppComponent, HomeComponent ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		SharedModule,
		LayoutModule,
		FlexLayoutModule,
		MatGridListModule,
		MatCardModule,
		MatMenuModule,
		MatIconModule,
		MatButtonModule,
		HttpClientModule,
		HttpClientInMemoryWebApiModule.forRoot(InMemoryStoreService)
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
