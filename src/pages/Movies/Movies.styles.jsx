import styled from 'styled-components';

export const Input = styled.input`
  width: 300px;
  height: 30px;
  margin-right: 10px;
`;

export const Form = styled.form`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ButtonSearch = styled.button`
  background-color: rgb(247, 76, 8);
  border-style: none;
  border-radius: 5px;
  height: 30px;
  width: 100px;
  :hover,
  :focus {
    background-color: #fccab8;
    cursor: pointer;
  }
`;
