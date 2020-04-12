import React from 'react'
import { connect, useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {useFirestoreConnect, isEmpty,isLoaded} from 'react-redux-firebase'
import {Container, Row, Col} from 'react-bootstrap'
import GameList from '../games/GameList'
import {Spinner} from 'react-bootstrap'

const Home = ({auth}) => {
    useFirestoreConnect([
        {collection: 'games', where:['players', 'array-contains', `${auth.uid}`]}
    ])
    const games = useSelector(state => state.firestore.ordered.games)


    if(!auth.uid) return <Redirect to='/login' />


    if (!isLoaded(games)) {
        return (
            <div className="spinner">
                <Spinner animation="border"></Spinner>
            </div>
        )
      }
    
      // Show message if there are no todos
    if (isEmpty(games)) {
        return (
            <div className="spinner">
                <h3>You have no current games.</h3>
            </div>
        )
    }
    return (
        <Container>
            <Row>
                <Col>
                    <h3 className="listTitle">Your Games</h3>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={12}>
                    <GameList 
                        games={games}
                        title="Your Games"
                    />
                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps = (state) => ({
    auth: state.firebase.auth
})

export default connect(mapStateToProps)(Home)
