import React from 'react'
import { Link } from 'react-router-dom'
import axios from '../../config/axios'

class ContactShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contact: {}
        }
        this.handleDelete = this.handleDelete.bind(this)
    }y

    handleDelete() {
        const confirmDelete = window.confirm("Are you sure?")
        if(confirmDelete) {
            // api call to delete
            axios.delete(`/contacts/${this.state.contact._id}`)
                .then(() => this.props.history.push('/contacts'))
                .catch(err => window.alert(err))
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`/contacts/${id}`)
            .then(response => this.setState(() => ({ contact: response.data})))
    }

    render() {
        return (
            <div  className="edit">
                <p> <span class="name-edit">Name - </span>{this.state.contact.name} </p>
                <p> <span class="name-edit">Email  - </span> { this.state.contact.email } </p>
                <p> <span class="mob-edit">Mobile - </span> { this.state.contact.mobile } </p>
                <div className="icon_right">
                <button onClick={this.handleDelete} className="icon-button">
                <span class="fa fa-trash icons"></span>
                </button>

                <Link to={`/contacts/edit/${this.state.contact._id}`}><span class="fa fa-edit icons"></span></Link>
                <Link to='/contacts'> <span class="fa fa-arrow-left icons"></span></Link></div>
            </div>
        )
    }

}

export default ContactShow