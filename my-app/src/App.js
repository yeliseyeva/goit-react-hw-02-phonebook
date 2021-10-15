import React, {Component} from "react";
// import Phonebook from "./Components/Phonebook";

class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

  render() {
    return (
      <>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        />

      <button>Add</button>
      </>
    )
  }
}

export default App;
