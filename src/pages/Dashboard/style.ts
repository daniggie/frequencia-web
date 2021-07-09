import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  color: #fff;
  font-size: 25px;
  font-family: sans-serif;
  max-width: 450px;
`;

export const Form = styled.form`
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
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;

    transition: transform 0.2s;

    &:hover{
      transform: translate(10px);
    }

    & + a{
      margin-top: 16px;
    }

    div{
      margin: 0 16px;

      strong {
        font-size: 15px;
        color: #3d3d4d;
      }

      p {
        font-size: 12px;
        color: #303030;
        margin-top: 4px;
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

