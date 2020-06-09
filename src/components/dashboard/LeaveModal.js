import React, {useCallback} from 'react'
import {useDispatch} from 'react-redux'
import {MDBModal, MDBModalHeader, MDBModalFooter,MDBModalBody, MDBBtn} from 'mdbreact'
import {leaveGame} from '../../store/actions/gameActions'

const LeaveModal = ({modal,toggle}) => {
    const dispatch = useDispatch()
    const leave = useCallback(() => {
        dispatch(leaveGame())
    },[dispatch])

    const submit = () => {
        leave()
        toggle()
    }
    return (
        <MDBModal isOpen={modal} toggle={toggle}>
            <MDBModalHeader toggle={toggle}>
                Warning
            </MDBModalHeader>
            <MDBModalBody>
                Are you sure you want to leave the game
            </MDBModalBody>
            <MDBModalFooter>
                <MDBBtn color="primary" onClick={submit}>Continue</MDBBtn>
                <MDBBtn color="secondary" onClick={toggle}>Close</MDBBtn>
            </MDBModalFooter>
        </MDBModal>
    )
} 

export default LeaveModal