import React, {useEffect} from 'react'
import { connect, useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {useFirestoreConnect, isEmpty,isLoaded} from 'react-redux-firebase'
import {MDBContainer,MDBRow,MDBCol} from 'mdbreact'
import GameList from '../components/GameList'
import {clearData} from '../../store/actions/gameActions'
import GameItem from '../components/GameItem'

const Home = ({auth,clearData}) => {
    useFirestoreConnect([
        {collection: 'games', where:['playerIds', 'array-contains', `${auth.uid}`]}
    ])
    useEffect(() => {
        return () => {
            clearData()
        }
    },[clearData])
    
    const userGames = useSelector(state => state.firestore.ordered.games)


    if(!auth.uid) return <Redirect to='/login' />


    if (!isLoaded(userGames)) {
        return (
            <div className="spinner">

            </div>
        )
      }
    
      // Show message if there are no todos
    if (isEmpty(userGames)) {
        return (
            <div className="spinner">
                <h3>No Recent Games.</h3>
            </div>
        )
    }
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol sm="12" md="6">
                    <GameList 
                        items={userGames}
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

const mapStateToProps = (state) => ({
    auth: state.firebase.auth
})
const mapDispatchToProps = (dispatch) => ({
    clearData: () => dispatch(clearData())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
