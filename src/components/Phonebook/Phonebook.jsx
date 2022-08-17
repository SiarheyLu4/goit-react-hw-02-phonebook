import React, { Component } from "react";
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';

export class Phonebook extends Component {
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: ''
}

  onChangeFilter = (event) => this.setState({ filter: event.target.value});

  onChangeForm = (event) => this.setState({ [event.target.name]: event.target.value });
    // console.log(event.target.value);
  
  onSubmit = (event) => {
    event.preventDefault();
    this.addContact(this.state);
    this.setState({
      name: '',
      number: ''
    });
  }

  getFilterContacts = () => {
    const { contacts, filter } = this.state;
    const caseInsensitive = filter.toLowerCase();
    return contacts.filter(contact =>
    contact.name.toLowerCase().includes(caseInsensitive));
  };

  addContact = ({ name, number }) => {
    this.setState(({ contacts }) => {
      const isContact = contacts.find(contact => contact.name === name);

      if (isContact) {
        Notify.warning(`${name} is already in contact`);
        // return contacts;
      } else {
        const newContact = {
        id: nanoid(),
        name,
        number,
        };
        return {
          contacts: [...contacts, newContact],
          };
      }
    });
  };
  
  render() {
    console.log(this.state);

    return (
      <>
      <h1>Phonebook</h1>
        <Form onSubmit={this.onSubmit}>
          <label>
            Name
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.onChangeForm}
            />
          </label>
          <label>
            Number
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.onChangeForm}
            />
          </label>
          <button type="submit">Add contact</button>
        </Form>
        <h2>Contacts</h2>
        <label>Find contacts by name
          <Input
            type="text"
            name="filter"
            value={this.state.filter}
            onChange={this.onChangeFilter}
          />
        </label>
        <ul>
          {this.getFilterContacts().sort((a, b) => a.name.localeCompare(b.name)).map(({id, name, number}) => (
            <li key={id}>{name}: {number}</li>))}
        </ul>
      </>
    )
  }
}

const Form = styled.form`
  display: table-caption;
  margin: 12px;
  border: 1px solid;
  padding: 8px;
`

const Input = styled.input`
  margin: 12px 0;
  padding: 4px;
`