import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { NavigateReducer } from './reducers/NavigateReducer.js'
import { UserReducer } from './reducers/UserReducer.js'

const rootReducer = combineReducers({
    NavigateReducer,
    UserReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));