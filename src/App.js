import React, { Component } from 'react';
import contacts from './contacts.json';
import './App.css'

class App extends Component {

  state = {
    showingContacts: contacts.splice(0,5), //This will have the first 5 
    restOfContacts: contacts  //This will have everyone else excpet the first 5 
  }

  showContacts = () => {
    let contactList = this.state.showingContacts.map((eachContact,i) => {
      return <li key={i}><img src = {eachContact.pictureUrl} alt='Pic'/>   {eachContact.name}  {eachContact.popularity} <button onClick={() => this.removeContact(i)}>Remove</button>  </li>
    })    
    return contactList
  }

  randomContact = () => {
    let rand = Math.floor(Math.random() * this.state.restOfContacts.length)
    let showingCopy = [...this.state.showingContacts]
    showingCopy.push(this.state.restOfContacts[rand])
    this.setState({
      showingContacts: showingCopy
    })
  }

  sortName = () => {
    let showCopy = [...this.state.showingContacts]
    let alphSorted = showCopy.sort((a, b) => {
      if (a.name<b.name)
        return -1
      if (a.name > b.name)
        return 1
      return 0
    })
    this.setState({
      showingContacts: alphSorted
    })
  }

  sortPop = () => {
    let sc = [...this.state.showingContacts]
    let popSorted = sc.sort((a,b) =>  b.popularity - a.popularity)
    this.setState({
      showingContacts: popSorted
    })
  }

  removeContact = (ind) => {
    let anothercpy = [...this.state.showingContacts]
    anothercpy.splice(ind, 1)
    this.setState({
      showingContacts: anothercpy
    })
  }

  render() {
    return (
      <div>
        <h1>Iron Contacts</h1>
        <button onClick={this.randomContact}> Random Contact </button>
        <button onClick={this.sortName}>Sort By Name</button>
        <button onClick={this.sortPop}>Sort By Popularity</button>  
        { this.showContacts() }   
      </div>
    );
  }
}

export default App;