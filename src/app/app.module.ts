import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';


import { AppComponent } from './core/containers/app.component/app.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './reducers';

import { CompaniesModule } from './companies/companies.module';


@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		CompaniesModule,
		BrowserModule,
		HttpClientModule,
		StoreModule.forRoot(reducers, { metaReducers }),
		EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument()
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }