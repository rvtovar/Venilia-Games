import authReducer from './authReducer'
import gameReducer from './gameReducer'
import filterReducer from './filterReducer'
import {combineReducers} from 'redux'
import {firebaseReducer} from 'react-redux-firebase'
import {firestoreReducer} from 'redux-firestore'

const rootReducer = combineReducers({
    auth: authReducer,
    games: gameReducer,
    filters: filterReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

export default rootReducer