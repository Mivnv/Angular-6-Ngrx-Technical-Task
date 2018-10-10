import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable, of } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { CompaniesService } from '../../../services/companies.service'
import { Company, ProcessedCompany, CompaniesJSON } from '../../models/company';
import { CompaniesActions } from '../../actions/index';
import * as fromCompanies from '../../reducers';

@Component({
	selector: 'app-companies',
	changeDetection: ChangeDetectionStrategy.OnPush,  
	templateUrl: './companies.component.html',
	styleUrls: ['./companies.component.css']
})

export class CompaniesComponent implements OnInit {

	items$: Observable<ProcessedCompany[]>;

	constructor(private store: Store<fromCompanies.State>) { 
		this.items$ = store.pipe(select(fromCompanies.getCompanies));
	}

	ngOnInit() {		
		this.store.dispatch(new CompaniesActions.LoadCompanies());
  }

	displayCompany(company: ProcessedCompany): void {
		console.log(company.id);
	}

}