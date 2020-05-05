import React from 'react'
import {List} from './Utils'

const GameList = ({games, title, Item}) => {
    return (
        <div className="game-list section">
            {
                title && <p className="h3 text-center mb-4 listTitle">{title}</p>
            }
            <List>
                {
                    games && games.map(game => (
                        <Item
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