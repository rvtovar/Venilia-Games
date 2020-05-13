import React from 'react'
import {MDBContainer,MDBCol,MDBRow} from 'mdbreact'
import MainHub from './MainHub'
import DashboardSideBar from './DashboardSideBar'

const Dashboard = ({game}) => {
    const {title} = game
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="1">
                    <DashboardSideBar title={title}/>
                </MDBCol>
                <MDBCol md="11">
                   <MainHub />
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}


export default Dashboard