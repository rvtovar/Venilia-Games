import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Nav} from 'react-bootstrap'
import {logOut} from '../../store/actions/authActions'
import {connect} from 'react-redux'

const SigedInLinks = ({logOut}) => {
    return (
        <Nav className="ml-auto">
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/search'>Search Games</Nav.Link>
            <LinkContainer to='/create' exact>
                <Nav.Link>New Game</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/about'>
                <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <Nav.Link onClick={logOut}>Sign Out</Nav.Link>
        </Nav>
    )
}

const MapDispatchToProps = (dispatch) => ({
    logOut: () => dispatch(logOut())
})

export default connect(undefined,MapDispatchToProps)(SigedInLinks)