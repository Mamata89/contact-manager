import React from 'react' 
import axios from 'axios'
import NotesForm  from './notesForm'

class Notesnew extends React.Component {
    constructor(){
        super() 
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(formData) {
        console.log('Notes new component')
        axios.post('http://localhost:3005/notes', formData)
            .then(() => this.props.history.push('/notes'))
            .catch(err => console.log(err))
    }

    render(){
        return (
            <div>
                <h2 class="form-heading"> Add notes </h2>
                <NotesForm  handleSubmit={this.handleSubmit} /> 
            </div>
        )
    }
}

export default Notesnew