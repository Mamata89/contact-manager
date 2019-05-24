import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
 
class NotesList extends React.Component {
    constructor(props){
        super(props) 
        this.state = {
            notes: []
        }
    }

    componentDidMount(){
        axios.get(`http://localhost:3005/notes`)
            .then(response => this.setState(() => ({
                    notes : response.data
            })))


    }
    render(){
        return(
            <div className='list-maindiv'>
                    {
                        this.state.notes.length === 0 ? (<p>No note found .Add your first notes</p>) : (
                            <div>
                                <h2>Notes List - {this.state.notes.length}</h2>
                                <ul>
                                {
                                   this.state.notes.map(note => {
                                    return (
                                        // <li key={note._id}><Link to=""><p>Title-{note.title} </p>  <p>Body - {note.body}</p> </Link> </li>
                                        <li className="list-class" key ={note._id}><Link to={`/notes/${note._id}`}>
                                        <i className="fa fa-hand-o-right"></i>
                                        <span className="list-name">Title- {note.title} </span></Link></li>

                                        
                                    )
                                })
                                }
                            </ul>
                            </div>
                        )
                    }
                 

               <center>  <Link className="link_button" to="/notes/new" >Add Notes</Link> </center> 
 
            </div>
        )
    }
}

export default NotesList