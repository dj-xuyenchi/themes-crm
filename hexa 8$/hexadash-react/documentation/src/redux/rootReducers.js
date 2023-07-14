import { combineReducers } from 'redux';
import authReducer from './authentication/reducers';
import { userReducer, userGroupReducer } from './users/reducers';
import ChangeLayoutMode from './themeLayout/reducers';
import dataTable from './data-filter/reducers';

const rootReducers = combineReducers({  
  auth: authReducer, 
  users: userReducer,
  userGroup: userGroupReducer,
  dataTable,
  ChangeLayoutMode 
});

export default rootReducers;
