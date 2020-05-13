import React from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'


const CreateChar = ({auth}) => {
    if(!auth.uid) return <Redirect to='/login' />
    return (
        <div>Hello</div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.firebase.auth
})

export default connect(mapStateToProps)(CreateChar)