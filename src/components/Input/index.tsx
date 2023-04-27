import React from 'react'
import styled from 'styled-components';

interface Props {
  iconleft?: string;
  placeHolder?: string;
  type?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputStyle = styled('input')`
  border: 1px solid #D1D5DA;
  width: 100%;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  border-radius: 4px;
  padding: 5px 4px 5px 40px;
  background: #ffffff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat 13px center;
`;

export const Input = ({
  placeHolder = 'placeholder',
  type = 'text',
  value,
  onChange
}: Props) => {
  return (
    <InputStyle
      type={type}
      placeholder={placeHolder}
      value={value}
      onChange={onChange}
    />
  )
}

export default Input
