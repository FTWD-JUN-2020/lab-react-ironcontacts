import React, { Component } from 'react';
import contacts from './contacts.json';


class App extends Component {

  state = {
    showingContacts: [...contacts].splice(0,5), //This will have the first 5 
    restOfContacts: [...contacts].splice(5),  //This will have everyone else except the first 5 
  }

  showContacts = () => {
    let contactList = this.state.showingContacts.map((eachContact,i) => {
      return <tr key={eachContact.id}>
      <td><img style={{width: '50px'}} src={eachContact.pictureUrl} alt={eachContact.name}/></td>
      <td>{eachContact.name}</td>
      <td>{eachContact.popularity}</td>
    </tr>
    })    
    return contactList
  }

  addContact = () => {
    let randomI = Math.floor(Math.random()*this.state.restOfContacts.length)
    let showingContactsCopy = [...this.state.showingContacts]
    let restOfContactsCopy = [...this.state.restOfContacts]
    showingContactsCopy.push(restOfContactsCopy[randomI])
    restOfContactsCopy.splice(randomI,1)

    this.setState({
      showingContacts: showingContactsCopy,
      restOfContacts: restOfContactsCopy, 
      newProp: 'Daniel'
    })
  }

  sortName = () => {
    let showingContactsCopy = [...this.state.showingContacts]
    showingContactsCopy.sort((a,b) => {
      return a.name.localeCompare(b.name)
      // if(a.name > b.name){
      //   return 1000
      // } else if(a.name < b.name) {
      //   return -1000
      // }
      // return 0
    })
    this.setState({
      showingContacts: showingContactsCopy
    })
  }

  sortPop = () => {
    let showingContactsCopy = [...this.state.showingContacts]
    showingContactsCopy.sort((a,b) => {
      return a.popularity - b.popularity
      // if(a.popularity > b.popularity){
      //   return 1000
      // } else if(a.popularity < b.popularity) {
      //   return -1000
      // }
      // return 0
    })
    this.setState({
      showingContacts: showingContactsCopy
    })
  }

  render() {
    console.log(this.state.showingContacts.length, this.state.restOfContacts.length)
    return (
      <div>
        <button onClick={this.addContact}>Add Random Contact</button>  
        <button onClick={this.sortName}>Sort by name</button>  
        <button onClick={this.sortPop}>Sort by popularity</button>  
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
          { this.showContacts() }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;