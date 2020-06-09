import React, {useState,useEffect, useCallback} from 'react'
import {MDBContainer,MDBRow,MDBCol,MDBInput,MDBBtn} from 'mdbreact'
import {useSelector,useDispatch} from 'react-redux'
import {logIn, clearAuthError} from '../../store/actions/authActions'
import {Redirect} from 'react-router-dom'

const SignIn = () => {
    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')

    const auth = useSelector(state => state.firebase.auth)
    const error = useSelector(state => state.auth.authError)

    const dispatch = useDispatch()
    const signIn = useCallback((creds) => dispatch(logIn(creds)), [dispatch])
    const clearError = useCallback(() => dispatch(clearAuthError()), [dispatch])

    useEffect(() => {
        return () => {
            clearError()
        }
    },[clearError])

    const handleChange = (value,type) => {
        if(type === 'email') setEmail(value)
        else if(type === 'password') setPassword(value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        signIn({email,password})
    }

    if(auth.uid) return <Redirect to='/' />
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="12" sm="12">
                <form className="authForm">
                    <p className="h3 text-center mb-4">Sign in</p>
                    <div className="grey-text">
                        <MDBInput 
                            label="Type your email" 
                            icon="dice" group 
                            type="email" 
                            getValue={userEmail => handleChange(userEmail,'email')} 
                        />
                        <MDBInput label="Type your password" 
                            icon="dragon" group 
                            type="password"
                            getValue={pwd => handleChange(pwd,'password')}
                        />
                    </div>
                    <div className="text-center">
                        <MDBBtn onClick={onSubmit} color="mdb-color">Login</MDBBtn>
                        <br/>
                        {
                            error && 
                            (<div className="red-text center" style={{padding:10}}>
                                <p>{error}</p>
                            </div>)
                        }
                    </div>
                </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

// const mapDispatchToProps = (dispatch) => ({
//     logIn: (creds) => dispatch(logIn(creds)),
//     clearAuthError: () => dispatch(clearAuthError())
// })

// const mapStateToProps = (state) => ({
//     authError: state.auth.authError,
//     auth: state.firebase.auth
// })

export default SignIn