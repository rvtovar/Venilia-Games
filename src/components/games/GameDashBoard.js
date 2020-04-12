import React from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Container,Row,Col, Spinner} from 'react-bootstrap'

const GameDashboard = ({auth, game}) => {
    console.log(game)
    if(!auth.uid) return <Redirect to='/login' />
    if(game){
        return (
            <Container>
                <Row>
                    <Col sm={12} md={6}>
                        <h3>Character Creator Modal</h3>
                        <h3>Character List</h3>
                    </Col>
                    <Col sm={12} md={{span:5,offset: 1}}>
                        <h3>Notification Bar</h3>
                        <h3>Dice Rolling Emulator</h3>
                    </Col>
                </Row>
            </Container>
        )
    }else {
        return (
            <div className="spinner">
                <Spinner animation="border"></Spinner>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    const games = state.firestore.data.games
    const game = games ? games[id] : null
    return {
        game:game,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect((props) => {
        const uid = props.auth.uid
        return [
            {collection: 'games', where:['players', 'array-contains-any', [`${uid}`]]}
        ]
    })
)(GameDashboard)