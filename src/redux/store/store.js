import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import categoriesReducer from '../reducers/categoriesReducer';
import productsReducer from "../reducers/productsReducer";
import userReducer from "../reducers/userReducer";

const combinedReducer = combineReducers({
  categoriesData: categoriesReducer,
  productsData: productsReducer,
  userData: userReducer,
});

const store = createStore(combinedReducer, composeWithDevTools(
  applyMiddleware(thunkMiddleware),
));

export default store;
