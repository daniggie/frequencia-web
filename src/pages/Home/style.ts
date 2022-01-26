import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
};

export const Title = styled.h1`
  color: #fff;
  font-size: 22px;
  font-family: sans-serif;
  max-width: 450px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
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
    ${props => props.hasError && css`
      border-color: #c53030;
    `}

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

export const Repositories = styled.div`
  margin-top: 30px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 8px;
    display: block;
    text-decoration: none;
    margin-top: 4px;

    display: flex;
    align-items: center;

    div{
      margin: 0 16px;

      strong {
        font-size: 15px;
        color: #3d3d4d;
      }

      p {
        font-size: 12px;
        color: #303030;
      }
    }
}`;

export const Corpo = styled.div`

  width: 750px;
  margin-top: 40px;
  background-color: #000;
  border-radius: 5px;
  padding: 15px 15px 15px 15px;

`;

export const Error = styled.span`
  display:block;
  width:97%;
  height: 30px;
  color: #fff;
  margin-top: 8px;
  padding: 5px;
  background: #c53030;
  border-radius: 20px;
  text-align: center;
`;

