import React, {useEffect} from 'react'
import { connect, useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {useFirestoreConnect, isEmpty,isLoaded} from 'react-redux-firebase'
import {MDBContainer,MDBRow,MDBCol} from 'mdbreact'
import GameList from '../components/GameList'
import {clearData} from '../../store/actions/gameActions'
import GameFilter from '../games/GameFilter'
import filter from '../../store/selector/selector'
import SearchItem from '../components/SearchItem'

const Search = ({auth,clearData,filters}) => {
    console.log(filters)
    useFirestoreConnect([
        {collection: 'games'}
    ])
    useEffect(() => {
        return () => {
            clearData()
        }
    },[clearData])

    const games = useSelector(state => state.firestore.ordered.games)


    if(!auth.uid) return <Redirect to='/login' />


    if (!isLoaded(games)) {
        return (
            <div className="spinner">

            </div>
        )
      }
    
      // Show message if there are no todos
    if (isEmpty(games)) {
        return (
            <div className="spinner">
                <h3>No Games Found</h3>
            </div>
        )
    }
    return (
        <MDBContainer >
            <MDBRow style={{justifyContent:'center'}}>
                <MDBCol sm="12" md="12">
                    <p className="h3 text-center mb-4" style={{marginTop: 30}}>Find a Game</p>
                    <GameFilter />
                    <GameList 
                        games={filter(games,filters)}
                        Item={SearchItem}
                    />
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

const mapStateToProps = (state) => ({
    auth: state.firebase.auth,
    filters:state.filters
})
const mapDispatchToProps = (dispatch) => ({
    clearData: () => dispatch(clearData())
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)