import React, {useCallback} from 'react'
import {
    MDBNavbarNav,MDBNavItem,MDBNavLink,MDBDropdown,
    MDBDropdownToggle, MDBIcon, MDBDropdownItem, MDBDropdownMenu,MDBLink
} from 'mdbreact'
import {logOut} from '../../store/actions/authActions'
import {useDispatch} from 'react-redux'

const SigedInLinks = ({profile}) => {
    const dispatch = useDispatch()
    const signOut = useCallback(() => dispatch(logOut()),[dispatch]) 

    return (
        <>
            <MDBNavbarNav left>
                <MDBNavItem>
                    <MDBNavLink to='/'>Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to='/search'>
                    <MDBIcon icon='search'/>  Search
                    </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to='/about'>About</MDBNavLink>
                </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
                <MDBNavItem>
                    <MDBDropdown>
                        <MDBDropdownToggle nav caret>
                            <MDBIcon icon="user"/> {profile.displayName}
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem >
                                <MDBLink to='#' className="black-text">
                                    <MDBIcon icon="user-edit"/>  Profile
                                </MDBLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                                <MDBLink to="/newChar" className="black-text">
                                    <MDBIcon icon="user-ninja" />  New Character
                                </MDBLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                                <MDBLink to='/create' className="black-text">
                                    <MDBIcon icon="dice-d20"/>  New Campaign
                                </MDBLink>
                            </MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink onClick={signOut} to='#'>
                        Sign Out
                    </MDBNavLink>
                </MDBNavItem>
            </MDBNavbarNav>
        </>
    )
}

// const MapDispatchToProps = (dispatch) => ({
//     logOut: () => dispatch(logOut())
// })

export default SigedInLinks