import React from 'react'
import {MDBContainer, MDBBtn, MDBCard,MDBCardTitle,MDBCardBody,MDBCardHeader,MDBCardText} from 'mdbreact'
import {connect} from 'react-redux'
import {joinGame} from '../../store/actions/gameActions'

const GameDetails = ({game,joinGame}) => {
    const {title,description,genre} = game
    return (
        <MDBContainer>
            <MDBCard className="gameCard z-depth-0">
                <MDBCardHeader>
                    <p className="h5">{genre}</p>
                </MDBCardHeader>
                <MDBCardBody>
                    <MDBCardTitle>
                        <p className="h5">{title}</p>
                    </MDBCardTitle>
                    <MDBCardText>
                        {description}
                    </MDBCardText>
                    <MDBBtn onClick={
                        () => joinGame(game)
                    }>
                        Join Game
                    </MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    )
}

const mapDispatchToProps = (dispatch) => ({
    joinGame: (game) => dispatch(joinGame(game))
})

export default connect(undefined,mapDispatchToProps)(GameDetails)

