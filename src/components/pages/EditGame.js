import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

const EditGame = ({auth}) => {
    if(!auth.uid) return <Redirect to='/login' />
    return (
        <div>
            <p>EditGame</p>
        </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.firebase.auth
})

export default connect(mapStateToProps)(EditGame)