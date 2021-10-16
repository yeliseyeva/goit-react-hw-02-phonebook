import React, {Component} from "react";
import ContactsList from "./Components/ContactsList/ContactsList";
import ContactForm from "./Components/ContactForm/ContactForm";
import Container from "./Components/Container/Container";
import Filter from "./Components/Filter/Filter";

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }

  addContact = contact => {
    this.state.contacts.some((contactName) => contactName.name === contact.name)
    ? alert("A user with the same name has already been added")
    : this.setState((prevState) => ({
      contacts: [
        {...contact}, ...prevState.contacts
      ]
    }))
  }

  changeFilter = (e) => {
    this.setState({filter: e.currentTarget.value})
  }

  render() {

    const filterContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLocaleLowerCase()))
    return (
      <>
      <Container title="Phonebook">
        <ContactForm  addContact={this.addContact}/>
      </Container>

      <Container title="Contacts">
        <Filter value={this.state.filter} changeFilter={this.changeFilter}/>
        <ContactsList contacts={filterContacts} name={this.state.name}/>
      </Container>
      </>
    )
  }
}

export default App;
