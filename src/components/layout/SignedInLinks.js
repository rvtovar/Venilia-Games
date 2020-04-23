import React from 'react'
import {
    MDBNavbarNav,MDBNavItem,MDBNavLink,MDBDropdown,
    MDBDropdownToggle, MDBIcon
} from 'mdbreact'
import {logOut} from '../../store/actions/authActions'
import {connect} from 'react-redux'

const SigedInLinks = ({logOut, profile}) => {
    return (
        <>
            <MDBNavbarNav left>
                <MDBNavItem>
                    <MDBNavLink to='/'>Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to='/create'>New Game</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to='/about'>About</MDBNavLink>
                </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
                <MDBNavItem>
                    <MDBDropdown>
                        <MDBDropdownToggle nav>
                            <MDBIcon icon="user"/> {profile.displayName}
                        </MDBDropdownToggle>
                    </MDBDropdown>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink onClick={logOut} to='#'>
                        Sign Out
                    </MDBNavLink>
                </MDBNavItem>
            </MDBNavbarNav>
        </>
    )
}

const MapDispatchToProps = (dispatch) => ({
    logOut: () => dispatch(logOut())
})

export default connect(undefined,MapDispatchToProps)(SigedInLinks)