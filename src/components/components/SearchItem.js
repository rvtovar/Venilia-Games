import React from 'react'
import {MDBContainer, MDBLink} from 'mdbreact'
import {ListItem} from './Utils'

const GameItem = ({item}) => {
    const {id,title,owner,genre} = item
    return (
        <ListItem>
            <MDBContainer className="grey-text">
                <MDBLink className="gameLink" to={`/games/${id}`}>{title}</MDBLink>
                <p className="text-center gameStatement">A {genre.toLowerCase()} adventure hosted by {owner}</p>
            </MDBContainer>
        </ListItem>
    )
}

export default GameItem
