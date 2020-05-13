import React,{useState} from 'react'
import {MDBContainer,MDBRow,MDBCol,MDBInput,MDBBtn, MDBIcon} from 'mdbreact'


const GameForm = ({gameSubmit}) => {
    let [title, setTitle] = useState('')
    let [description, setDescription] = useState('')
    let [genre, setGenre] = useState('Genre')
    let [error,setError] = useState('')
    const handleChange = (value,type) => {
        if(type === 'title') setTitle(value)
        else if(type === 'description') setDescription(value)
        else if(type === 'genre') setGenre(value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if(!title || genre === 'Genre'){
            setError('All games must include a title and genre')
        }else{
            gameSubmit({
                title,
                genre,
                description
            })
        }
    }

    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="12" sm="12">
                    <form className="authForm">
                        <p className="h3 text-center mb-4">New Campaign</p>
                        <div className="grey-text">
                            <MDBInput label="Title" icon="dice" group type="text"  getValue={
                                    (gameTitle) => handleChange(gameTitle,'title')
                            }/>
                            <div className="input-group">
                                <div className="input-group-addon">
                                    <MDBIcon icon="biohazard" size="2x" />
                                </div>
                                <select className="browser-default custom-select custom-setup grey-text" value={genre} onChange={(e) => setGenre(e.target.value)}>
                                    <option>Genre</option>
                                    <option value="Fantasy" className="purple-text">Fantasy</option>
                                    <option value="Modern" className="purple-text">Modern</option>
                                    <option value="Science Fiction" className="purple-text">Science Fiction</option>
                                    <option value="Horror" className="purple-text">Horror</option>
                                    <option value="Superheroes" className="purple-text">Superheroes</option>
                                    <option value="Post-Apocalyptic" className="purple-text">Post-Apocalyptic</option>
                                    <option value="Fairy Tale" className="purple-text">Fairy Tale</option>
                                    <option value="Historical" className="purple-text">Historical</option>
                                </select>
                            </div>
                            <MDBInput label="Description" icon="dragon" group  type="textarea"  getValue={
                                (gameDescription) => handleChange(gameDescription,'description')
                            } style={{height: 90}}/>
                        </div>
                        <div className="text-center">
                            <MDBBtn color="mdb-color" onClick={onSubmit}>Create</MDBBtn>
                            <br/>
                            {
                                error && 
                                (<div className="red-text center" style={{padding:10}}>
                                    <p>{error}</p>
                                </div>)
                            }
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default GameForm