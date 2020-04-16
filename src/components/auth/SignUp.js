import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {signUp} from '../../store/actions/authActions'

const SignUp = ({auth, authError, signUp}) => {
    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')
    let [username, setUsername] = useState('')
    let [name, setName] = useState('')

    const handleChange = (e) => {
        if(e.target.id === 'email') setEmail(e.target.value)
        else if(e.target.id === 'password') setPassword(e.target.value)
        else if(e.target.id === 'username') setUsername(e.target.value)
        else if(e.target.id === 'name') setName(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        signUp({
            email,password,username,name
        })
    }

    if(auth.uid) return <Redirect to='/' />
    return (
        <div className="container authForm">
            <h3>Sign Up Today</h3>
            <Form onSubmit={onSubmit}>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Username"
                        value={username}
                        onChange={handleChange}
                        id="username"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Name"
                        value={name}
                        onChange={handleChange}
                        id="name"
                    />
                </Form.Group>
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
                    Sign Up
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

const mapStateToProps = (state) => ({
    authError: state.auth.authError,
    auth: state.firebase.auth
})

const mapDispatchToProps = (dispatch) => ({
    signUp: (newUser) => dispatch(signUp(newUser))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)