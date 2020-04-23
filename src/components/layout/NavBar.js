import React, {useState} from 'react'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import {MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBCollapse} from 'mdbreact'
import { connect } from 'react-redux'

const NavBar = ({auth, profile}) => {
    const [isOpen, setIsOpen] = useState(false)
    const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks />
    return (
        <MDBNavbar dark expand="md" color="special-color">
            <MDBNavbarBrand>
               <strong> Venilia Games</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={() => setIsOpen(!isOpen)} />
            <MDBCollapse isOpen={isOpen} id="navbarCollapse3" navbar>
                {links}
            </MDBCollapse>
        </MDBNavbar>
    )
}

const mapStateToProps = (state) => ({
    auth: state.firebase.auth,
    profile: state.firebase.profile
})

export default connect(mapStateToProps)(NavBar)