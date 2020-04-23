import React from 'react'
import GameSummary from './GameSummary'
import {MDBCard} from 'mdbreact'
import {List} from '../components/Utils'

const GameList = ({games, title}) => {
    return (
        <div className="game-list section">
            <p className="h3 text-center mb-4 listTitle">{title}</p>
            <List>
                {
                    games && games.map(game => (
                        <GameSummary 
                            key={game.id}
                            game={game}
                        />
                    ))
                }
            </List>
        </div>
    )
}

export default GameList