import React from 'react'
import {connect} from 'react-redux'
import {setSearchFilter} from '../../store/actions/filterAcitons'
import {MDBInput} from 'mdbreact'


const GameFilter = ({setSearchFilter}) => {
    const handleChange = (value,type) => {
        if(type === 'search') setSearchFilter(value)
    }

    return (
        <div className="grey-text searchbar">
            <MDBInput hint="Search" icon="search" group type="text"  getValue={
                (searchItem) => handleChange(searchItem,'search')
            }/>             
        </div>
    )
}



const mapDispatchToProps = (dispatch) => {
    return {
        setSearchFilter: (searchItem) => dispatch(setSearchFilter(searchItem))
    }
}


export default connect(undefined,mapDispatchToProps)(GameFilter)