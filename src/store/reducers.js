import { combineReducers } from 'redux';

const appReducer = combineReducers({  });
//separate reducer with common above .

export default function rootReducer(state, action) {
  if (action.type === '') {
    // eslint-disable-next-line
    state = {};
  }

  return appReducer(state, action);
}
