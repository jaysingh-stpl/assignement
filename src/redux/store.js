import { applyMiddleware, createStore, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from './middleware/loggerMiddleware'
import monitorReducerEnhancer from './enhancer/monitorReducer'
import rootReducer from './reducers';

const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware)
const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, undefined, composedEnhancers(middlewareEnhancer, monitorReducerEnhancer))

export default store;