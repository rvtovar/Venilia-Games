import React, {useEffect, useCallback} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Redirect} from 'react-router-dom'
import {useFirestoreConnect,isEmpty,isLoaded} from 'react-redux-firebase'
import Dashboard from '../dashboard/Dashboard'
import GameDetails from '../games/GameDetails'
import {clearData} from '../../store/actions/gameActions'

const Game = ({match}) => {
    const auth = useSelector(state => state.firebase.auth)
    const gameId = match.params.id
    useFirestoreConnect([
        {
           collection: 'games',
           doc: gameId
        },
        {
            collection:'players',
            where:['game','==',`${gameId}`],
            populates: [{child:'player',root:'displayNames'}]
        }
    ])
    
    const dispatch = useDispatch()
    const clear = useCallback(() => dispatch(clearData()), [dispatch])
    useEffect(() => {
        return () => {
            clear()
        }
    },[clear])

    const game = useSelector(state => state.firestore.ordered.games)
    const players = useSelector(state => state.firestore.ordered.players)
    
    if(!auth.uid) return <Redirect to='/login' />


    if(!isLoaded(game) || !isLoaded(players)) {
        return (
            <div className="spinner">

            </div>
        )
    }

    if(isEmpty(game)) {
        return (
            <div className="spinner">
                <h3>No Game Found</h3>
            </div>
        )
    }

    const player = players.filter(({player}) => player === auth.uid)
    if(isEmpty(player)){
        return <GameDetails game={game[0]} />
    }

    return <Dashboard game={game[0]} />
}

// const mapStateToProps = (state) => {
//     return {
//         auth: state.firebase.auth
//     }
// }

// const mapDispatchToProps = (dispatch) => ({
//     clearData: () => dispatch(clearData())
// })

export default Game