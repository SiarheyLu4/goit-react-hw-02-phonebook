import React, { Component } from "react";
// import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";

export class Phonebook extends Component {
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: ''
}

  onChangeFilter = (event) => this.setState({ filter: event.target.value});
    // console.log(event.target.value);
  
  addContact = ({name,number}) => {
    const newContact = {
        id: nanoid(),
        name,
        number,
    } 
    if (this.state.contacts.find(contact => contact.name === name)) {
          Notify.warning(`${name} is already in contacts`); 
          return
        };
    this.setState ({
      contacts: [...this.state.contacts, newContact]
    });
  };

  getFilterContacts = () => {
    const { contacts, filter } = this.state;
    const caseInsensitive = filter.toLowerCase();
    return contacts.filter(contact =>
    contact.name.toLowerCase().includes(caseInsensitive));
  };

  deleteContact = (id) => { 
  //   this.setState (prevState => ({ contacts: prevState.contacts.filter((contact) => contact.id !== id)})
    // )
    this.setState ({ contacts: this.state.contacts.filter((contact) => contact.id !== id)})

  };

  render() {
    console.log(this.state);
    const { addContact,
      onChangeFilter,
      getFilterContacts,
      deleteContact } = this;
    const { filter } = this.state;

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} />
        
        <h2>Contacts</h2>
        <Filter value={filter}
                onChange={onChangeFilter}/>
        <ContactList getFilterContacts={getFilterContacts}
          deleteContact={ deleteContact } />
      </>
    )
  }
}

