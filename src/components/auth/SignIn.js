import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {logIn} from '../../store/actions/authActions'
import {Redirect} from 'react-router-dom'

const SignIn = ({authError, logIn, auth}) => {
    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')
    const handleChange = (e) => {
        if(e.target.id === 'email') setEmail(e.target.value)
        else if(e.target.id === 'password') setPassword(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        logIn({email,password})
    }

    if(auth.uid) return <Redirect to='/' />
    return (
        <div className="container authForm">
            <h3>Log In</h3>
            <Form onSubmit={onSubmit}>
                <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter Email"
                        value={email}
                        onChange={handleChange}
                        id="email"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password"
                        value={password}
                        onChange={handleChange}
                        id="password"
                    />
                </Form.Group>
                <Button variant="primary" type='submit'>
                    Log In
                </Button>
                {
                    authError && 
                    (<div className="text-danger text-center">
                        <p>{authError}</p>
                    </div>)
                }
            </Form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    logIn: (creds) => dispatch(logIn(creds))
})

const mapStateToProps = (state) => ({
    authError: state.auth.authError,
    auth: state.firebase.auth
})

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)