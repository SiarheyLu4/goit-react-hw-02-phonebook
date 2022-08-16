import React, { Component } from "react";
import styled from 'styled-components';
import { nanoid } from 'nanoid';

export class Phonebook extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: ''
  }

  

  onChange = (event) => this.setState({ [event.target.name]: event.target.value });
    // console.log(event.target.value);
  
  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      contacts: [...this.state.contacts, [`${this.state.name}: ${this.state.number}`]],
      name: '',
      number: ''
    });
  }
  
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
              onChange={this.onChange}
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
              onChange={this.onChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </Form>
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <Input
          type="text"
          name="filter"
        />
        <ul>
          {this.state?.contacts?.map(contact => (
            <li key={nanoid()}>{contact}</li>))}
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