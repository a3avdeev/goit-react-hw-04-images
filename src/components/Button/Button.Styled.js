import styled from 'styled-components';

export const ButtonStyled = styled.button`
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  padding: 4px;
  font-size: 1.1em;
  border: 1px solid black;
  border-radius: 4px;

  &:hover,
  :focus {
    background-color: #dc143c;
    color: #ffffff;
    cursor: pointer;
  }
`;
