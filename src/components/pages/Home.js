import React, {useEffect, useCallback} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {useFirestoreConnect, isEmpty,isLoaded} from 'react-redux-firebase'
import {MDBContainer,MDBRow,MDBCol} from 'mdbreact'
import GameList from '../components/GameList'
import {clearData} from '../../store/actions/gameActions'
import GameItem from '../components/GameItem'
import {objToArr} from '../../helper/helper'




const Home = () => {
    const auth = useSelector(state => state.firebase.auth)
    useFirestoreConnect([
        {
            collection:'players',  
            populates:[{child:'game',root:'games'}],
            where: ['player','==', `${auth.uid}`]
        }
    ])
    const dispatch = useDispatch()
    const clear = useCallback(() => dispatch(clearData()), [dispatch])
    useEffect(() => {
        return () => {
            clear()
        }
    },[clear])
    const players = useSelector(state => state.firestore.ordered.players)
    const userGames = useSelector(state => state.firestore.data.games)

    if(!auth.uid) return <Redirect to='/login' />
    if (!isLoaded(players)) {
        return (
            <div className="spinner">

            </div>
        )
      }
    
      // Show message if there are no todos
    if (isEmpty(players)) {
        return (
            <div className="spinner">
                <h3>No Recent Games.</h3>
            </div>
        )
    }

    let games = objToArr(userGames)
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol sm="12" md="6">
                    <GameList 
                        items={games}
                        title="Recent Games"
                        Component={GameItem}
                    />
                </MDBCol>
                <MDBCol>
                    <div className="game-list section">
                        <p className="h3 text-center mb-4 listTitle">Upcoming Games</p>
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

// const mapStateToProps = (state) => ({
//     auth: state.firebase.auth
// })
// const mapDispatchToProps = (dispatch) => ({
//     clearData: () => dispatch(clearData())
// })

export default Home
