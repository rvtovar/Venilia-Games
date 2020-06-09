import React, {useState} from 'react'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import {MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBCollapse} from 'mdbreact'
import { useSelector } from 'react-redux'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const auth = useSelector(state => state.firebase.auth)
    const profile = useSelector(state => state.firebase.profile)

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

// const mapStateToProps = (state) => ({
//     auth: state.firebase.auth,
//     profile: state.firebase.profile
// })

export default NavBar