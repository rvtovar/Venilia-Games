import React from 'react'
import {useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'

const EditGame = () => {
    const auth = useSelector(state => state.firebase.auth)
    if(!auth.uid) return <Redirect to='/login' />
    return (
        <div>
            <p>EditGame</p>
        </div>
    )
}

// const mapStateToProps = (state) => ({
//     auth: state.firebase.auth
// })

export default EditGame