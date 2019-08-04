import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';


/* the middleware that the store is
 expecting from redux is going to be an array */
const middlewares = [logger]; // logger is a function which we put inside the array 

const store = createStore(rootReducer, applyMiddleware(...middlewares));


export default store;