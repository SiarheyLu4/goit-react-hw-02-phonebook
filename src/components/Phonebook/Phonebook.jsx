import React, { Component } from "react";
import styled from 'styled-components';
import { nanoid } from 'nanoid';

export class Phonebook extends Component {
  state = {
  contacts: [],
  name: ''
  }

  

  onChange = (event) => this.setState({ [event.target.name]: event.target.value });
    // console.log(event.target.value);
  
  onSubmit = (event) => {
    event.preventDefault();
    this.setState({ contacts: [...this.state.contacts, this.state.name], name: '' });
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
          <button type="submit">Add contact</button>
        </Form>
        <h2>Contacts</h2>
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