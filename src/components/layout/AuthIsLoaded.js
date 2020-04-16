import React from 'react'
import {useSelector} from 'react-redux'
import {isLoaded} from 'react-redux-firebase'
import { Spinner } from 'react-bootstrap'
const AuthIsLoaded = ({children}) => {
    const auth = useSelector(
      (state) => state.firebase.auth
    )
    if(!isLoaded(auth)){
      return (
        <div className='mx-auto spinner'>
          <Spinner animation="border" />
        </div>
      )
    }
    return children
}

export default AuthIsLoaded