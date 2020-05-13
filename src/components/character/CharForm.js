import React,{useState} from 'react'
import {connect} from 'react-redux'
import {MDBModal,MDBModalBody,MDBModalFooter,MDBModalHeader,MDBInput,MDBIcon} from 'mdbreact'
import {setCharToggle} from '../../store/actions/dashboardActions'

const CharForm = ({charToggle,setCharToggle}) => {
    return (
        <MDBModal isOpen={charToggle} toggle={setCharToggle} size="large">
            <div>
                Testing
            </div>
        </MDBModal>
    )
}

const mapStateToProps = (state) => ({
    charToggle: state.dashboard.charToggle
})

const mapDispatchToProps = (dispatch) => ({
    setCharToggle: () => dispatch(setCharToggle())
})

export default connect(mapStateToProps, mapDispatchToProps)(CharForm)