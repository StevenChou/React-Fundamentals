import { combineReducers } from 'redux';

import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer,
  whaleBro: (state = {}, action) => {
    return 'Steven';
  }
});
