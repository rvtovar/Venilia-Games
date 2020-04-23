import React, {useState,useEffect} from 'react'
import {MDBContainer,MDBRow,MDBCol,MDBInput,MDBBtn} from 'mdbreact'
import {connect} from 'react-redux'
import {signUp, clearAuthError} from '../../store/actions/authActions'
import {Redirect} from 'react-router-dom'

const SignUp = ({authError, signUp, auth, clearAuthError}) => {
    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')
    let [firstName,setFirstName] = useState('')
    let [lastName,setLastName] = useState('')
    useEffect(() => {
        return () => {
            clearAuthError()
        }
    },[clearAuthError])
    const handleChange = (value,type) => {
        if(type === 'email') setEmail(value)
        else if(type === 'password') setPassword(value)
        else if(type === 'firstName') setFirstName(value)
        else if(type === 'lastName') setLastName(value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        signUp({email,password,firstName,lastName})
    }

    if(auth.uid) return <Redirect to='/' />
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="12" sm="12">
                <form className="authForm">
                    <p className="h3 text-center mb-4">Sign up</p>
                    <div className="grey-text">
                    <MDBInput label="First Name" icon="dice" group type="text"  getValue={
                        (fn) => handleChange(fn,'firstName')
                    }/>
                    <MDBInput label="Last Name" icon="dragon" group type="text" getValue={
                        (ln) => handleChange(ln,'lastName')
                    }/>
                    <MDBInput label="Email" icon="envelope" group type="text"  getValue={
                        (userEmail) => handleChange(userEmail,'email')
                    }/>
                    <MDBInput label="Password" icon="lock" group type="password" getValue={
                        (pwd) => handleChange(pwd,'password')
                    }/>
                    </div>
                    <div className="text-center">
                    <MDBBtn color="mdb-color" onClick={onSubmit}>Register</MDBBtn>
                    <br/>
                    {
                        authError && 
                        (<div className="red-text center" style={{padding:10}}>
                            <p>{authError}</p>
                        </div>)
                    }
                    </div>
                </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

const mapStateToProps = (state) => ({
    authError: state.auth.authError,
    auth: state.firebase.auth
})

const mapDispatchToProps = (dispatch) => ({
    signUp: (newUser) => dispatch(signUp(newUser)),
    clearAuthError: () => dispatch(clearAuthError())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)