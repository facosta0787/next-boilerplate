import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import appReducer from './reducer';
import homeReducer from '../../routes/home/reducers/homeReducer';

const rootReducer = combineReducers({
  appReducer,
  homeReducer,
});

const middlewares = [
  thunk,
];

const initializeStore = () => (
  createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(...middlewares),
    ),
  )
);

export default initializeStore;
