import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import categoriesReducer from '../reducers/categoriesReducer';
import productsReducer from "../reducers/productsReducer";
import userReducer from "../reducers/userReducer";
import userOrderReducer from "../reducers/userOrderReducer";
import commentsReducer from "../reducers/commentsReducer";

const combinedReducer = combineReducers({
  categoriesData: categoriesReducer,
  productsData: productsReducer,
  userData: userReducer,
  userOrderData: userOrderReducer,
  commentsData: commentsReducer
});

const store = createStore(combinedReducer, composeWithDevTools(
  applyMiddleware(thunkMiddleware),
));

export default store;
