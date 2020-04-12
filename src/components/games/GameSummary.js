import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const GameSummary = ({game}) => {
    return (
        <Card className="gameCard">
            <Card.Header>{game.system}</Card.Header>
            <Card.Body>
                <Card.Title>{game.title}</Card.Title>
                <Card.Text>Created By {game.owner}</Card.Text>
                <LinkContainer to={`/games/${game.id}`}>
                    <Button variant="secondary">Join Game</Button>
                </LinkContainer>
            </Card.Body>
        </Card>
    )
}

export default GameSummary