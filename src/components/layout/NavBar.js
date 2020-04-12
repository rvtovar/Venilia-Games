import React from 'react'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import {Navbar} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { connect } from 'react-redux'

const NavBar = ({auth, profile}) => {
    const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks />
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <LinkContainer to='/'>
                <Navbar.Brand href="/">
                {
                    profile.userName ? `Welcome ${profile.userName}` : 'Venilia Games'
                }
                </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                {links}
            </Navbar.Collapse>
        </Navbar>
    )
}

const mapStateToProps = (state) => ({
    auth: state.firebase.auth,
    profile: state.firebase.profile
})

export default connect(mapStateToProps)(NavBar)