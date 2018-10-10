import { Action } from '@ngrx/store';

import { ProcessedCompany } from '../models/company';


export enum CompaniesActionTypes {
  LoadCompanies = '[Companies] Load Companies',
  LoadCompaniesSuccess = '[Companies] Load Companies Success'
}

export class LoadCompanies implements Action {
  readonly type = CompaniesActionTypes.LoadCompanies;
}

export class LoadCompaniesSuccess implements Action {
	readonly type = CompaniesActionTypes.LoadCompaniesSuccess

	constructor(public payload: ProcessedCompany[]) {} 
}

export type CompaniesActionsUnion = 
	| LoadCompanies 
	| LoadCompaniesSuccess;