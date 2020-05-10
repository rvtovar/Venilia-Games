import React,{useEffect} from 'react'
import {MDBContainer,MDBCol,MDBRow} from 'mdbreact'
import {connect} from 'react-redux'
import CharForm from './CharForm'
import MainHub from './MainHub'
import DashboardSideBar from './DashboardSideBar'
import {setHomeToggle} from '../../store/actions/dashboardActions'

const Dashboard = ({game, charToggle,setHomeToggle}) => {
    // const {title,owner,id} = game
    useEffect(() => {
        return () => setHomeToggle()
    }, [setHomeToggle])
    
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="1">
                    <DashboardSideBar />
                </MDBCol>
                <MDBCol md="11">
                   {
                        charToggle ? <CharForm /> : <MainHub />
                   }
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

const mapStateToProps = (state) => ({
    charToggle: state.dashboard.charToggle
})

const mapDispatchToProps = (dispatch) => ({
    setHomeToggle: () => dispatch(setHomeToggle())
})


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)