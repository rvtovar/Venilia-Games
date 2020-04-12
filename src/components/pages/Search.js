import React from 'react'
import { connect, useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {useFirestoreConnect, isLoaded, isEmpty} from 'react-redux-firebase'
import {Container, Row, Col} from 'react-bootstrap'
import GameList from '../games/GameList'
import filterSelector from '../../store/selector/selector'
import {Spinner} from 'react-bootstrap'
import GameFilter from '../games/GameFilter'

const Search = ({auth,filters}) => {
    useFirestoreConnect([
        {collection: 'games'}
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
                <h3>There are no current games.</h3>
            </div>
        )
    }
    return (
        <Container>
            <Row>
                <Col>
                    <h3 className="listTitle">Current OnGoing Games</h3>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={12}>
                    <GameFilter />
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={12}>
                    <GameList 
                        games={filterSelector(games,filters)}
                    />
                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps = (state) => ({
    auth: state.firebase.auth,
    filters: state.filters
})

export default connect(mapStateToProps)(Search)