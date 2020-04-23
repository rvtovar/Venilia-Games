import React from 'react'
import { connect, useSelector } from 'react-redux'
import {Redirect} from 'react-router-dom'
import {useFirestoreConnect,isEmpty,isLoaded} from 'react-redux-firebase'
import {MDBContainer,MDBCol,MDBRow} from 'mdbreact'

const GameDashboard = ({auth,match}) => {
    const gameId = match.params.id
    useFirestoreConnect([
        {
            collection: 'games',
            doc: gameId
        }
    ])
    const game = useSelector(state => state.firestore.data.games)
    if(!auth.uid) return <Redirect to='/login' />


    if(!isLoaded(game)) {
        return (
            <div className="spinner">
                <strong>Loading Game</strong>
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
        const {title,description,owner,playerIds} = game[gameId]
        if(playerIds.includes(auth.uid)){
            return (
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="12" sm="12">
                            <h3>{title}</h3>
                            <h4>GM - {owner} </h4>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="6" sm="12">
                            <span>{description}</span>
                        </MDBCol>
                        <MDBCol md='5' sm='12' className='offset-m1'>
                            <h3>Current Characters</h3>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            )
        }else{
            return (
                <div>
                    <h1>Would You like to join this game</h1>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(GameDashboard)