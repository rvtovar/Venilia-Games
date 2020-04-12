import React from 'react'
import {connect} from 'react-redux'
import {setOwnerFilter,setTitleFilter} from '../../store/actions/filterAcitons'
import {InputGroup,FormControl,Card, Container,Row,Col} from 'react-bootstrap'


const GameFilter = ({setOwnerFilter,setTitleFilter,filters}) => {

    return (
        <div className="game-list section authForm">
           <Card className="gameCard">
               <Card.Header>Search Options</Card.Header>
                <Card.Body>
                <Container>
                    <Row>
                        <Col md={6} sm={12}>
                            <InputGroup size="lg">
                            <FormControl 
                                placeholder="Title"
                                aria-label="Large" 
                                aria-describedby="inputGroup-sizing-sm" 
                                value={filters.title}
                                onChange={(e) => setTitleFilter(e.target.value)}
                            />
                            </InputGroup>
                        </Col>
                        <Col>
                            <InputGroup size="lg">
                                <FormControl 
                                    placeholder="Owner"
                                    aria-label="Large" 
                                    aria-describedby="inputGroup-sizing-sm" 
                                    value={filters.owner}
                                    onChange={(e) => setOwnerFilter(e.target.value)}
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                </Container>
                </Card.Body>
           </Card>
        </div>
    )
}




const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setOwnerFilter: (owner) => dispatch(setOwnerFilter(owner)),
        setTitleFilter: (title) => dispatch(setTitleFilter(title))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(GameFilter)