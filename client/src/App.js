import React, { Component } from 'react';
import { BrowserRouter, Route, Link , Switch} from 'react-router-dom'

import './App.css';
import Home from './components/layout/Home'
import ContactList from './components/contacts/List'
import ContactShow from './components/contacts/Show'
import ContactNew from './components/contacts/New'
import ContactEdit from './components/contacts/Edit'

import NotesList from './components/notes/notesList'
import NotesNew from './components/notes/notesNew'
import NotesShow from './components/notes/notesShow'
import NoteEdit from './components/notes/editNotes'

import UserRegister from './components/authentication/Register'
import UserLogin from './components/authentication/Login'
import axios from './config/axios';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isAuthenticated: !!localStorage.getItem('token'),
    }
    this.handleIsAuthenticated = this.handleIsAuthenticated.bind(this)
  }

  handleIsAuthenticated(bool) {
    this.setState(() =>({
      isAuthenticated: bool
    }))
  }
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <h1 className="text_head"> Contact Manager </h1>
         <center> <div className="container link_maindiv">
          <Link to="/"> Home |</Link> 
          <Link to="/contacts">Contacts |</Link>
          <Link to="/notes"> Notes |</Link>
       

          {
            this.state.isAuthenticated && <Link to="/users/logout">Logout</Link>
          }
          {
            !this.state.isAuthenticated && (
              <div className="link_maindiv">
                 <Link to='/users/register'>Register |</Link>
                 <Link to='/users/login'>Login |</Link>
              </div>
            )
          }
         </div></center>

          <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/contacts" component={ContactList} exact={true} />
          <Route path="/contacts/new" component={ContactNew} exact={true} />
          <Route path="/contacts/:id" component={ContactShow} exact={true} />
          <Route path="/contacts/edit/:id" component={ContactEdit} exact={true} />

          <Route path="/notes" component={NotesList} exact={true} />
          <Route path="/notes/new" component={NotesNew}/> 
          <Route path="/notes/:id" component={NotesShow} exact={true}/>
          <Route path="/notes/edit/:id" component={NoteEdit} exact={true}/>

          <Route path="/users/register" component={UserRegister} exact={true}/>
          <Route path="/users/login" render={ () => <UserLogin handleIsAuthenticated =
          {this.handleIsAuthenticated}/> } /> 
          <Route path="/users/logout" component={() => {
                localStorage.clear()
                axios.defaults.headers['x-auth'] = null
                return(
                  <div>
                    <p className="welcome_text">You are successfully logged out</p>
                  </div>
                )
          }}/>


          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;