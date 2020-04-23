import React from 'react'
import {MDBCard,MDBCardBody,MDBCardHeader, MDBBtn,MDBCardText,MDBRow,MDBCol} from 'mdbreact'
import {LinkContainer} from 'react-router-bootstrap'
import {ListItem} from '../components/Utils'

const GameSummary = ({game}) => {
    return (
        <ListItem>
            <MDBRow>
                <MDBCol sm='5' xs='12' className="gameSummary">
                        <p className="text-center mb-4 gameHeader">{game.title}</p>
                        <p className="text-center mb-4">{game.genre}</p>
                </MDBCol>
                <MDBCol sm='7' xs='12' className="text-center gameButton">
                    <LinkContainer to={`/games/${game.id}`}>
                        <MDBBtn color="mdb-color" className="gameButton">Start Game</MDBBtn>
                    </LinkContainer>
                </MDBCol>
            </MDBRow>
        </ListItem>
    )
}

export default GameSummary
