import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk';
import offersReducer from './offersReducer';
import currentOfferReducer from './currentOfferReducer';
import PhotoReducer from './galleryPhotoReducer';

const rootReducer = combineReducers({
  offers: offersReducer,
  currentOffer: currentOfferReducer,
  photo: PhotoReducer
})

const middlewareEnhancer = applyMiddleware(thunk);

const composeWithDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const composedEnhancers = composeWithDevTools(middlewareEnhancer)

const store = createStore(rootReducer, composedEnhancers);

export default store;