import React, {useCallback} from 'react'
import GameForm from '../games/GameForm'
import { useSelector, useDispatch } from 'react-redux'
import {Redirect} from 'react-router-dom'
import { createGame } from '../../store/actions/gameActions'

const CreateGame = ({ history}) => {
    const auth = useSelector(state => state.firebase.auth)
    const dispatch = useDispatch()
    const create = useCallback((game) => dispatch(createGame(game)), [dispatch])
    const addGame = async (game) => {
         await create(game)
        history.push('/')
    }
    if(!auth.uid) return <Redirect to='/login' />
    return (
        <GameForm gameSubmit={addGame}/>
    )
}

// const mapStateToProps = (state) => ({
//     auth: state.firebase.auth
// })

// const mapDispatchToProps = (dispatch) => ({
//     createGame: (game) => dispatch(createGame(game)),
//     clearData: () => dispatch(clearData())
// })

export default CreateGame