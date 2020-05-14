import React, {useEffect} from 'react'
import { connect, useSelector } from 'react-redux'
import {Redirect} from 'react-router-dom'
import {useFirestoreConnect,isEmpty,isLoaded} from 'react-redux-firebase'
import Dashboard from '../dashboard/Dashboard'
import GameDetails from '../games/GameDetails'
import {clearData} from '../../store/actions/gameActions'

const Game = ({auth,match, clearData}) => {
    const gameId = match.params.id
    useFirestoreConnect([
        {
           collection: 'games',
           doc: gameId
        },
        {
            collection:'players',
            where:['game','==',gameId]
        }
    ])
    
    useEffect(() => {
        return () => {
            clearData()
        }
    },[clearData])

    const game = useSelector(state => state.firestore.ordered.games)
    const players = useSelector(state => state.firestore.ordered.players)
    if(!auth.uid) return <Redirect to='/login' />


    if(!isLoaded(game)) {
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

    if(game){
        console.log(game[0])
        return <Dashboard game={game[0]}/>
        // if(playerIds.includes(auth.uid)){
        //     return <Dashboard game={game[0]} />
        // }else{
        //     return <GameDetails game={game[0]} />
        // }
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => ({
    clearData: () => dispatch(clearData())
})

export default connect(mapStateToProps,mapDispatchToProps)(Game)