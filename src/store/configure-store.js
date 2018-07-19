import { createStore, applyMiddleware } from 'redux';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './root-reducer';

const configureStore = () => {
  const middlewares = [reduxPackMiddleware, thunk];

  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );
};

export default configureStore;
