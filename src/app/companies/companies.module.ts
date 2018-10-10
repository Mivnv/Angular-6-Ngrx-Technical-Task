import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CompaniesEffects } from './effects/companies.effects';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { ChartModule } from 'angular-highcharts';
import { CompaniesChartComponent } from './components/companies-chart/companies-chart.component';
import { CompaniesComponent } from './containers/companies/companies.component';


import { reducers } from './reducers/index';


@NgModule({
  imports: [
    CommonModule,
    ChartModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    BrowserAnimationsModule,
    StoreModule.forFeature('main', reducers),
    EffectsModule.forFeature([CompaniesEffects]),
  ],
  exports: [
    CompaniesComponent,
    CompaniesChartComponent,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule
  ],
  declarations: [
    CompaniesComponent,
    CompaniesChartComponent
  ],
})

export class CompaniesModule { }