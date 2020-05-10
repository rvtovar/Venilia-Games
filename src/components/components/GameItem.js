import React from 'react'
import {MDBBtn,MDBRow,MDBCol,MDBIcon} from 'mdbreact'
import {LinkContainer} from 'react-router-bootstrap'
import {ListItem} from './Utils'

const GameItem = ({item}) => {
    const {title,owner, genre, id} = item
    return (
        <ListItem>
            <MDBRow>
                <MDBCol>
                    <p className="text-center mb-4 gameHeader">{title}</p>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol sm='5' xs='12' className="gameSummary">
                    <div className="input-group-addon">
                        <MDBIcon icon="user-astronaut" size="1x"/>
                        <span className="text-center mb-4 gameOwner"> {owner}</span>
                    </div>
                    <p className="text-center mb-4">{genre}</p>
                </MDBCol>
                <MDBCol sm='7' xs='12' className="text-center gameButton">
                    <LinkContainer to={`/games/${id}`}>
                        <MDBBtn color="mdb-color" className="gameButton">Start Game</MDBBtn>
                    </LinkContainer>
                </MDBCol>
            </MDBRow>
        </ListItem>
    )
}

export default GameItem
