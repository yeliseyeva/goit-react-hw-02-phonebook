import React, {Component} from "react";
import ContactsList from "./Components/ContactsList/ContactsList";
// import Phonebook from "./Components/Phonebook";

class App extends Component {
  state = {
    contacts: ["wow"],
    name: ''
  }

  addContact = text => {
    const contact = {
      name: text
    }

    this.setState(({contacts}) => ({
      contacts: [contact, ...contacts]
    }))
  }


  handleChange = e => {
    this.setState({
      name: e.currentTarget.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    this.addContact(this.state.name)


  }

  render() {
    return (
      <>
      <form onSubmit={this.handleSubmit}>
      <input
        type="text"
        value={this.state.name}
        onChange={this.handleChange}
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        />

      <button type="submit">Add</button>
      </form>

      <ContactsList contacts={this.state.contacts}/>
      
      </>
    )
  }
}

export default App;
