import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import categoriesReducer from '../reducers/categoriesReducer';

const combinedReducer = combineReducers({
  categoriesData: categoriesReducer,
  productsData: categoriesReducer,
});

const store = createStore(combinedReducer, composeWithDevTools(
  applyMiddleware(thunkMiddleware),
));

export default store;
