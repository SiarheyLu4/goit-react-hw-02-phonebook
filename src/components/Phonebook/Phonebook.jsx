import React, { Component } from "react";
import styled from 'styled-components';

export class Phonebook extends Component {
  state = {
  contacts: [],
  name: ''
  }
  
  render() {

    return (
      <>
      <h1>Phonebook</h1>
        <Form>
          <label>
            Name
            <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      <h2>Contacts</h2>
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