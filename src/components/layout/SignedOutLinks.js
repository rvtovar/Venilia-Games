import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Nav} from 'react-bootstrap'

const SignedOutLinks = () => {
    return (
        <Nav className="ml-auto">
            <LinkContainer to='/login'>
                <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/signup'>
                <Nav.Link>Sign Up</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/about'>
                <Nav.Link>About</Nav.Link>
            </LinkContainer>
        </Nav>
    )
}

export default SignedOutLinks