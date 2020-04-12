import React from 'react'
import GameSummary from './GameSummary'

const GameList = ({games}) => {
    console.log('games => ', games)
    return (
        <div className="game-list section">
            {
                games && games.map(game => (
                    <GameSummary 
                        key={game.id}
                        game={game}
                    />
                ))
            }
        </div>
    )
}

export default GameList