import React from 'react'
import {connect} from 'react-redux'
import {MDBListGroup,MDBListGroupItem,MDBIcon} from 'mdbreact'
import {NavLink} from 'react-router-dom'
import {setCharToggle,setHomeToggle} from '../../store/actions/dashboardActions'
const DashboardSideBar = ({setCharToggle,setHomeToggle}) => {
    return(
        <div className="sidebar position-fixed">
            <MDBListGroup className="list-group-flush">
            <NavLink to='#' activeClassName="activeClass" onClick={setHomeToggle}>
                    <MDBListGroupItem >
                        <MDBIcon icon="home" className="mr-3"/>
                        Main
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to='#' activeClassName="activeClass" onClick={setCharToggle}>
                    <MDBListGroupItem >
                        <MDBIcon icon="user" className="mr-3"/>
                        Create Character
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="#" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="dice" className="mr-3"/>
                        Dice Roll
                    </MDBListGroupItem>
                </NavLink>
            </MDBListGroup>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    setCharToggle: () => dispatch(setCharToggle()),
    setHomeToggle: () => dispatch(setHomeToggle())
})

export default connect(undefined,mapDispatchToProps)(DashboardSideBar)