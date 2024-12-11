import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {thunk }from 'redux-thunk';
import rootReducer from './reducers';

const initialState = { 
    isAuthenticated: false,
    user: null,
};

const middleware = [thunk];

const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return { ...state, isAuthenticated: true, user: action.payload };
      case 'LOGOUT':
        return { ...state, isAuthenticated: false, user: null };
      default:
        return state;
    }
  };

  // Combine reducers
// const rootReducer = combineReducers({
//     user: userReducer,
//   });

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);
  
export default store;
