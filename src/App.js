import React, { Component } from 'react';
import contacts from './contacts.json';
import './App.css';

class App extends Component {

  state = {
    showingContacts: [...contacts].splice(0, 5), //This will have the first 5
    restOfContacts: [...contacts].splice(5), //This will have everyone else except the first 5
  };

  showContacts = () => {
    let contactList = this.state.showingContacts.map((eachContact, i) => {
      return (
        <tr key={eachContact.id}>
          <td>
            <img
              style={{ width: '50px' }}
              src={eachContact.pictureUrl}
              alt={eachContact.name}
            />
          </td>
          <td>{eachContact.name}</td>
          <td>{eachContact.popularity}</td>
          <td>
            <button className="fancy-font3" onClick={() => this.deleteRow(i)}>Delete</button>
          </td>
        </tr>
      );
    });
    return contactList;
  };

  deleteRow = (index) => {
    console.log(index, 'this just got deleted');
    let showContactsChanged = [...this.state.showingContacts];
    showContactsChanged.splice(index, 1);
    this.setState({
      showingContacts: showContactsChanged,
    });
  };

  addContact = () => {
    let randomI = Math.floor(Math.random() * this.state.restOfContacts.length);
    let showingContactsCopy = [...this.state.showingContacts];
    let restOfContactsCopy = [...this.state.restOfContacts];
    showingContactsCopy.push(restOfContactsCopy[randomI]);
    restOfContactsCopy.splice(randomI, 1);

    this.setState({
      showingContacts: showingContactsCopy,
      restOfContacts: restOfContactsCopy,
      newProp: 'Daniel',
    });
  };

  sortName = () => {
    let showingContactsCopy = [...this.state.showingContacts];
    showingContactsCopy.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    this.setState({
      showingContacts: showingContactsCopy,
    });
  };

  sortPop = () => {
    let showingContactsCopy = [...this.state.showingContacts];
    showingContactsCopy.sort((a, b) => {
      return a.popularity - b.popularity;
  });

  this.setState({
    showingContacts: showingContactsCopy,
  });
};

render() {
  console.log(
    this.state.showingContacts.length,
    this.state.restOfContacts.length
  );
  return (
    <div>
              <button className="fancy-font" onClick={this.addContact}>Add Random Contact</button>
        <button className="fancy-font1 "onClick={this.sortName}>Sort by name</button>
        <button className="fancy-font2" onClick={this.sortPop}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.showContacts()}</tbody>
        </table>
      </div>
    );
  }
}

export default App;