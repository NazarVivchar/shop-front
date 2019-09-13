import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import categoriesReducer from '../reducers/categoriesReducer';
import productsReducer from "../reducers/productsReducer";

const combinedReducer = combineReducers({
  categoriesData: categoriesReducer,
  productsData: productsReducer,
});

const store = createStore(combinedReducer, composeWithDevTools(
  applyMiddleware(thunkMiddleware),
));

export default store;
