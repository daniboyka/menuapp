
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import menuReducer from '../Reducer/menuReducer';

const rootReducer = combineReducers({
  menu: menuReducer,
  // otros reducers...
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
