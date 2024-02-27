import { createStore, combineReducers } from 'redux';
import themeReducer from '../reducers/themereducer';

const rootReducer = combineReducers({
  theme: themeReducer
});

const store = createStore(rootReducer);

export default store;
