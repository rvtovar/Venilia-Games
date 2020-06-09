import React from 'react'
import { useSelector} from 'react-redux'
import {MDBListGroup,MDBListGroupItem} from 'mdbreact'
import {objToArr} from '../../helper/helper'

const DashboardSideBar = ({title, toggle, ownerId}) => {
    const displayNamesObj = useSelector((state) => state.firestore.data.displayNames)
    const uid= useSelector(state => state.firebase.auth.uid)
    const displayNames = objToArr(displayNamesObj)

    console.log(ownerId)
    return(
        <div className="sidebar position-fixed">
            <MDBListGroup className="list-group-flush">
                <MDBListGroupItem className="sidebar-title">
                    <strong>{title}</strong>
                </MDBListGroupItem>
                <MDBListGroupItem className="sidebar-section">
                    <strong>Current Players</strong>
                </MDBListGroupItem>
                <ul>
                    {
                        displayNames && displayNames.map((player) => (
                            <li className="sidebar-names" key={player.id}>
                                {player.displayName}
                            </li>
                        ))
                    }
                </ul>
               {
                   ownerId !== uid && (
                    <MDBListGroupItem className="sidebar-section">
                        <button onClick={toggle} className="leave">
                            Leave Game
                        </button>
                    </MDBListGroupItem>
                   )
               }
            </MDBListGroup>
        </div>
    )
}


export default DashboardSideBar