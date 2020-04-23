import React, {useEffect} from 'react'
import { connect, useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {useFirestoreConnect, isEmpty,isLoaded} from 'react-redux-firebase'
import {MDBContainer,MDBRow,MDBCol} from 'mdbreact'
import GameList from '../games/GameList'
import {clearData} from '../../store/actions/gameActions'

const Home = ({auth,clearData}) => {
    useFirestoreConnect([
        {collection: 'games', where:['playerIds', 'array-contains', `${auth.uid}`]}
    ])
    useEffect(() => {
        clearData()
    },[clearData])
    const userGames = useSelector(state => state.firestore.ordered.games)


    if(!auth.uid) return <Redirect to='/login' />


    if (!isLoaded(userGames)) {
        return (
            <div className="spinner">
                <strong>Loading Games</strong>
            </div>
        )
      }
    
      // Show message if there are no todos
    if (isEmpty(userGames)) {
        return (
            <div className="spinner">
                <h3>You have no current games.</h3>
            </div>
        )
    }
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol sm="12" md="6">
                    <GameList 
                        games={userGames}
                        title="Recent Games"
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

const mapStateToProps = (state) => ({
    auth: state.firebase.auth
})
const mapDispatchToProps = (dispatch) => ({
    clearData: () => dispatch(clearData())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
