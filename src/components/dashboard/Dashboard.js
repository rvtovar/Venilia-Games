import React, {useState} from 'react'
import {MDBContainer,MDBCol,MDBRow} from 'mdbreact'
import MainHub from './MainHub'
import DashboardSideBar from './DashboardSideBar'
import  LeaveModal from './LeaveModal'

const Dashboard = ({game}) => {
    const [modal, setModal] = useState(false)
    const {title, ownerId} = game

    const toggle = () => {
        setModal(!modal)
    }
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="1">
                    <DashboardSideBar title={title} toggle={toggle} ownerId={ownerId}/>
                </MDBCol>
                <MDBCol md="11">
                   <MainHub />
                </MDBCol>
            </MDBRow>
            <LeaveModal modal={modal} toggle={toggle}/>
        </MDBContainer>
    )
}



export default Dashboard