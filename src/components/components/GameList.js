import React from 'react'
import {List} from './Utils'

const GameList = ({items, title, Component}) => {
    return (
        <div className="game-list section">
            {
                title && <p className="h3 text-center mb-4 listTitle">{title}</p>
            }
            <List>
                {
                    items && items.map(item => (
                        <Component
                            key={Math.random()}
                            item={item}
                        />
                    ))
                }
            </List>
        </div>
    )
}

export default GameList