import { combineReducers } from 'redux';

import reducerLogin from './reducerLogin';
import reducerRoom from './reducerRoom';

const appReducer = combineReducers({
  login: reducerLogin,
  room: reducerRoom
});

export default appReducer;
