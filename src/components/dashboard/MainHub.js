import React from 'react'
import {MDBCol, MDBRow} from 'mdbreact'

const MainHub = () => {
    return (
        <MDBRow>
            <MDBCol md='6' sm='12'>
                <div className="game-list section">
                    <p className="h3 text-center mb-4 listTitle">Current Characters</p>
                </div>
            </MDBCol>
            <MDBCol md="6" sm="12">
                <div className="game-list section">
                    <p className="h3 text-center mb-4 listTitle">Notifications</p>
                </div>
            </MDBCol>
        </MDBRow>
    )
}

export default MainHub