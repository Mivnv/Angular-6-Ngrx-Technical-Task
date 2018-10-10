import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { asyncScheduler, EMPTY as empty, Observable, of } from 'rxjs';
import {
	catchError,
	map,
	switchMap
} from 'rxjs/operators';

import { CompaniesService } from '../../services/companies.service';
import { CompaniesActions } from '../actions/index';
import { CompaniesJSON, Company, ProcessedCompany } from '../models/company';

@Injectable()
export class CompaniesEffects {

	@Effect()
	loadCompanies$: Observable<Action> = this.actions$.pipe(
		ofType<CompaniesActions.LoadCompanies>(CompaniesActions.CompaniesActionTypes.LoadCompanies),
		switchMap(() => {
			return this.companiesService
				.getCompanies()
				.pipe(
					map((companiesJSON: CompaniesJSON) => {
						let processedCompanies: ProcessedCompany[] = 
							companiesJSON.companies
							.filter((company: Company) => company.monthRevenue)
							.map((company) => {
								return {
									id: company.id,
									name: company.name,
									category: company.type,
									weekStats: company.revenuePerWeek,
									balance: company.revenue,
									monthBalance: company.monthRevenue
								};
							});

						return new CompaniesActions.LoadCompaniesSuccess(processedCompanies)
					})
				);
		}) 
	);
	constructor(
		private actions$: Actions,
		private companiesService: CompaniesService
	) { }
}	