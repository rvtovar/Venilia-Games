import React from 'react'
import GameForm from '../games/GameForm'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import { createGame,clearData } from '../../store/actions/gameActions'

const CreateGame = ({auth, createGame, history, clearData}) => {
    if(!auth.uid) return <Redirect to='/login' />
    
    const addGame = async (game) => {
         await createGame(game)
        history.push('/')
    }
    return (
        <GameForm gameSubmit={addGame}/>
    )
}

const mapStateToProps = (state) => ({
    auth: state.firebase.auth
})

const mapDispatchToProps = (dispatch) => ({
    createGame: (game) => dispatch(createGame(game)),
    clearData: () => dispatch(clearData())
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateGame)