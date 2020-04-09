import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootSaga from "./rootSaga";
import rootReducer from "./rootReducer";

export default function configureStore(preloadedState) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [logger, sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  sagaMiddleware.run(rootSaga);

  return store;
}
