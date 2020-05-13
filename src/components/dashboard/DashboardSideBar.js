import React from 'react'
import {MDBListGroup,MDBListGroupItem,MDBIcon} from 'mdbreact'
import {NavLink} from 'react-router-dom'
const DashboardSideBar = ({title}) => {
    return(
        <div className="sidebar position-fixed">
            <MDBListGroup className="list-group-flush">
            <MDBListGroupItem className="sidebar-title">
                <strong>{title}</strong>
            </MDBListGroupItem>
                <NavLink to='#' activeClassName="activeClass">
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


export default DashboardSideBar