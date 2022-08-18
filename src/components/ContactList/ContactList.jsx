import React from "react";
// import styled from 'styled-components';

export const ContactList = ({ getFilterContacts, deleteContact }) => {
  return (
    <ul>
      {getFilterContacts().sort((a, b) => a.name.localeCompare(b.name)).map(({id, name, number}) => (
        
        <li key={id}>{name}: {number}
            <button type='' onClick={() => deleteContact(id)}> Del </button>
        </li>
        
      ))}
    </ul>
  )
}