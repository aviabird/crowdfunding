import { environment } from './../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { compose } from '@ngrx/core/compose';
import { AppState } from './app.state';

import { ActionReducer, combineReducers } from '@ngrx/store';
import { authReducer } from './core/reducers/auth.reducer';
import { projectReducer } from './project/reducers/project.reducer';
import { commentReducer } from './project/reducers/comment.reducer';
import { userReducer } from './user/reducers/user.reducer';


const reducers = {
  project: projectReducer,
  comment: commentReducer,
  auth: authReducer,
  user: userReducer
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
