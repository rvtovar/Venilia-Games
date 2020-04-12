import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap'


const GameForm = ({gameSubmit}) => {
    let [title, setTitle] = useState('')
    let [content, setContent] = useState('')
    let [system, setSystem] = useState('Numenera')
    const handleChange = (e) => {
        if(e.target.id === 'title') setTitle(e.target.value)
        else if(e.target.id === 'content') setContent(e.target.value)
        else if(e.target.id === 'system') setSystem(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        gameSubmit({
            title,
            system,
            content
        })
    }

    return(
        <div className="container authForm">
            <h3>Create A New Game</h3>
            <Form onSubmit={onSubmit}>
                <Form.Group>
                    <Form.Label>New Game Title</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Game Title"
                        value={title}
                        onChange={handleChange}
                        id="title"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>System Select</Form.Label>
                    <Form.Control as="select" 
                        value={system}
                        onChange={handleChange}
                        id="system"
                    >
                        <option value="Numenera">Numenera</option>
                        <option value="The Strange">The Strange</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Game Content</Form.Label>
                    <Form.Control as="textarea"
                        type="text" 
                        placeholder="Enter Game Content"
                        value={content}
                        onChange={handleChange}
                        id="content"
                    />
                </Form.Group>
                <Button variant="primary" type='submit'>
                    Create New Game
                </Button>
            </Form>
        </div>
    )
}

export default GameForm