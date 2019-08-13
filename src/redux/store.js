import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist'; // allows browser to cache our store  depenging on certain configs


/* the middleware that the store is
 expecting from redux is going to be an array */
const middlewares = [logger]; // logger is a function which we put inside the array 

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };