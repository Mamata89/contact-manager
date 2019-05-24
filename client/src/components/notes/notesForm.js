import React from 'react' 

class NotesForm extends React.Component {
    constructor(props) {

        super(props) 
        this.state = {
            title: ''
        }
        // bind methods, sets the context of the this keyword
       
        this.handleSubmit = this.handleSubmit.bind(this) 
    }

    componentWillReceiveProps(nextProps){
            console.log(`component will receive `,nextProps )
            const {title} = nextProps.note
            this.setState( () => ({
                title
            }))
    }
    // es6 arrow function
    handleNameChange = (e) => {
        const title = e.target.value 
        // console.log(this) 
        this.setState(() => ({ title }))
    }


    handleSubmit(e) {
        e.preventDefault() 
        const formData = {
            title: this.state.title 
        }
        this.props.handleSubmit(formData)

        // clear form 

        this.setState(() => ({ 
           title: ''
        }))
      
    }

    render() {
        return (
            <div className="form_class">
                <form onSubmit={this.handleSubmit} className="form_class_div">
                    <label>
                    <span className="name-span"> Name</span>
                        <input type="text" value={this.state.title} onChange={this.handleNameChange} /> 
                        <span class="fa fa-user errspan"></span>
                    </label> <br/> 
                    <center> <input type="submit" className="link_button" /> </center>
                </form> 
            </div>
        )
    }
}

export default NotesForm