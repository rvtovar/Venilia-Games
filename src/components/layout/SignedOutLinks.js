import React from 'react'
import {
    MDBNavbarNav,MDBNavItem,MDBNavLink
} from 'mdbreact'

const SignedOutLinks = () => {
    return (
        <MDBNavbarNav right>
            <MDBNavItem>
                <MDBNavLink to='/login'>Login</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink to='/signup'>Sign Up</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink to='/about'>About</MDBNavLink>
            </MDBNavItem>
        </MDBNavbarNav>
    )
}

export default SignedOutLinks