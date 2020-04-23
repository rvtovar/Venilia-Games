import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import'bootstrap-css-only/css/bootstrap.min.css'; 
import'mdbreact/dist/css/mdb.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import firebase from 'firebase/app'
import {ReactReduxFirebaseProvider} from 'react-redux-firebase'
import {createFirestoreInstance} from 'redux-firestore'
import fbConfig from './config/fbConfig'
import configureStore from './store/store/confgureStore'
import AuthIsLoaded from './components/layout/AuthIsLoaded'


const store = configureStore()
store.subscribe(() => {
  console.log(store.getState())
})

const rrfConfig = {
  ...fbConfig,
  userProfile: 'users',
  useFirestoreForProfile: true,
  attachAuthIsReady:true,
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch:store.dispatch,
  createFirestoreInstance
}


ReactDOM.render(
  <ReactReduxFirebaseProvider {...rrfProps}>
    <Provider store={store}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </Provider>
  </ReactReduxFirebaseProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
