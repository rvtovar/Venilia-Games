import React, {useCallback} from 'react'
import {useDispatch} from 'react-redux'
import {setSearchFilter} from '../../store/actions/filterAcitons'
import {MDBInput} from 'mdbreact'


const GameFilter = () => {
    const dispatch = useDispatch()
    const setFilter = useCallback((value) => dispatch(setSearchFilter(value)), [dispatch])

    const handleChange = (value,type) => {
        if(type === 'search') setFilter(value)
    }

    return (
        <div className="grey-text searchbar">
            <MDBInput hint="Search" icon="search" group type="text"  getValue={
                (searchItem) => handleChange(searchItem,'search')
            }/>             
        </div>
    )
}



// const mapDispatchToProps = (dispatch) => {
//     return {
//         setSearchFilter: (searchItem) => dispatch(setSearchFilter(searchItem))
//     }
// }


export default GameFilter