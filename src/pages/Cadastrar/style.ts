import styled, { css } from 'styled-components';
import { shade } from 'polished';


export const Title = styled.h1`
  color: #fff;
  font-size: 20px;
  font-family: sans-serif;
  max-width: 450px;
`;


export const Corpo = styled.div`
width: 750px;
margin-top: 40px;
background-color: #3ba873;
border-radius: 5px;
padding: 15px 15px 15px 15px;

h1{
  color: #fff;
}

p{
  font-size: 15px;
  color: #fff;
}
`;

export const Form = styled.form`
  margin-top: 10px;
  max-width: 700px;
  display: flex;
  input {
    flex: 1;
    height: 40px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3b3b3b;
    border: 2px solid #fff;
    &::placeholder {
      color: #a8a8b3;
    }
  }
  button {
    width: 50px;
    heigth: 35px;
    background: #6e6e6e;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-size: 12px;
    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.2, '#6e6e6e')};
    }
  }
`;
