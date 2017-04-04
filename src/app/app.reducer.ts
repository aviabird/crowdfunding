import { environment } from './../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { compose } from '@ngrx/core/compose';
import { AppState } from './app.state';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { projectReducer } from './project/reducers/project.reducer';

const reducers = {
  project: projectReducer
};

export const developmentReducer: ActionReducer<AppState> = compose(storeFreeze, combineReducers)(reducers); ;
const productionReducer: ActionReducer<AppState> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}
