import React from 'react'
import {useSelector} from 'react-redux'
import {isLoaded} from 'react-redux-firebase'

const AuthIsLoaded = ({children}) => {
    const auth = useSelector(
      (state) => state.firebase.auth
    )
    const profile = useSelector(
      (state) => state.firebase.profile
    )
    if(!isLoaded(auth) && !isLoaded(profile)){
      return (
        <div className='mx-auto spinner'>

        </div>
      )
    }
    return children
}

export default AuthIsLoaded