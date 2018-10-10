import { CompaniesActions } from '../actions/index';

import { ProcessedCompany } from '../models/company'


export interface State {
	items: ProcessedCompany[]
}

const initialState: State = {
	items: []
};

export function reducer(
  state = initialState,
  action:
    | CompaniesActions.CompaniesActionsUnion
): State {
  switch (action.type) {
    case CompaniesActions.CompaniesActionTypes.LoadCompaniesSuccess: {
      return {
        ...state,
        items: [...state.items, ...action.payload]
      };
    }

    default: {
      return state;
    }
  }
}