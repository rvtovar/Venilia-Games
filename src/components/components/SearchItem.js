import React from 'react'
import {MDBContainer, MDBLink} from 'mdbreact'
import {ListItem} from './Utils'

const GameItem = ({game}) => {
    return (
        <ListItem>
            <MDBContainer className="grey-text">
                <MDBLink className="gameLink" to={`/games/${game.id}`}>{game.title}</MDBLink>
                <p className="text-center gameStatement">A {game.genre.toLowerCase()} adventure hosted by {game.owner}</p>
            </MDBContainer>
        </ListItem>
    )
}

export default GameItem
