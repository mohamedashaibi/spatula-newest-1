import {createStore,compose,applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import combineReducers from './Reducers'
const middleware=[thunk]
const middlewareEnhancer = applyMiddleware(...middleware);

const enhancers = [middlewareEnhancer]  
const composedEnhancers = composeWithDevTools(...enhancers)
const store = createStore(combineReducers, composedEnhancers)

// const store=createStore(combineReducers,
//     compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//     )
export default store;
