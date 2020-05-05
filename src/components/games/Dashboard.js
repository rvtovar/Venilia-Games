import React from 'react'
import {MDBContainer,MDBCol,MDBRow} from 'mdbreact'

const Dashboard = ({game}) => {
    const {title,owner,description} = game
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
}


export default Dashboard