import {createStore,applyMiddleware, compose} from 'redux'
import rootReducer from '../reducers/rootReducer'

import thunk from 'redux-thunk'

export default () => createStore(rootReducer,compose(applyMiddleware(thunk)))