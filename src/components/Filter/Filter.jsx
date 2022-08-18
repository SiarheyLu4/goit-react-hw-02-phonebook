import React from "react";
import styled from 'styled-components';

export const Filter = ({value, onChange}) => {
  return (
    <label>Find contacts by name
          <Input
            type="text"
            name="filter"
            value={value}
            onChange={onChange}
          />
        </label>
  )
}

const Input = styled.input`
  margin: 12px 0;
  padding: 4px;
`