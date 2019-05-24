import React from 'react' 

class ContactForm extends React.Component {
    constructor(props) {

        super(props) 
        this.state = {
            name: '', 
            email: '', 
            mobile: '' 
        }
        // bind methods, sets the context of the this keyword
        this.handleMobileChange = this.handleMobileChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this) 
    }

    componentWillReceiveProps(nextProps){
            console.log(`component will receive `,nextProps )
            const { name, email, mobile} = nextProps.contact
            this.setState( () => ({
                name,
                email,
                mobile,
                notice:'successfully Registered, taking you to login screen'
            }))
    }
    // es6 arrow function
    handleNameChange = (e) => {
        const name = e.target.value 
        // console.log(this) 
        this.setState(() => ({ name }))
    }

    // es6 function - bind in constructor
    handleMobileChange(e) {
        const mobile = e.target.value 
        // console.log(this)
        this.setState(() => ({ mobile }))
    }

    // es6 function - bind when calling the function
    handleEmailChange(e) {
        const email = e.target.value 
        this.setState(() => ({ email }))
    }

    handleSubmit(e) {
        e.preventDefault() 
        const formData = {
            name: this.state.name, 
            email: this.state.email, 
            mobile: this.state.mobile 
        }
        this.props.handleSubmit(formData)

        // clear form 

        this.setState(() => ({ 
            name: '', email: '', mobile: ''
        }))
      
    }

    render() {
        return (
            <div className="form_class">
            
                <form onSubmit={this.handleSubmit} className="form_class_div">
              
                <label>
                <span className="name-span"> Name</span>
                        <input type="text" value={this.state.name} onChange={this.handleNameChange} /> <span className="fa fa-user errspan"></span>
                    </label> <br/> 
                    

                    <label>
                    <span className="mob-span"> Mobile </span>
                        <input type="text" value={this.state.mobile} onChange={this.handleMobileChange} />
                        <span className="fa fa-phone errspan"></span>
                    </label> <br /> 

                    <label>
                    <span className="name-span"> Email </span>
                        <input type="text" value={this.state.email} onChange={this.handleEmailChange.bind(this)} />
                        <span className="fa fa-envelope errspan"></span>
                    </label> <br /> 

                   <center> <input type="submit" className="link_button" /> </center>
                </form> 
            </div>
        )
    }
}

export default ContactForm