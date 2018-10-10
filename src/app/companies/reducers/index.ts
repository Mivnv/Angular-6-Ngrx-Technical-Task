import {
	ActionReducer,
	ActionReducerMap,
	createFeatureSelector,
	createSelector,
	MetaReducer
} from '@ngrx/store';

import * as fromCompanies from './companies.reducer';
import * as fromRoot from '../../reducers';

export interface CompaniesState {
  companies: fromCompanies.State;
}

export interface State extends fromRoot.State{
	main : CompaniesState
}

export const reducers: ActionReducerMap<CompaniesState> = {
	companies: fromCompanies.reducer
};

export const getCompanies = (state: State) => state.main.companies.items;