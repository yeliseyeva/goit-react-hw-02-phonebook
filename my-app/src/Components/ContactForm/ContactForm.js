import React, {Component} from "react";
// import PropTypes from "prop-types";

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }

    handleChange = e => {
        this.setState({
          [e.currentTarget.name]: e.currentTarget.value,
        }) 
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.addContact(this.state);

        this.setState({
            name: "",
            number: ""
          })
    
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                />

                <input
                type="tel"
                placeholder="Enter number"
                value={this.state.number}
                onChange={this.handleChange}
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
                />

                <button type="submit">Add</button>
            </form>
        )
    }
}

export default ContactForm;