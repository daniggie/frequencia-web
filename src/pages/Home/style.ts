import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  color: #fff;
  font-size: 22px;
  font-family: sans-serif;
  max-width: 450px;
`;

export const Form = styled.form`
  margin-top: 20px;
  max-width: 700px;
  display: flex;
  justify-content: space-between;
  button {
    width: 120px;
    height: 40px;
    background: #6e6e6e;
    border-radius: 5px;
    border: 0;
    color: #fff;
    font-size: 15px;

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#6e6e6e')};
    }

    a{
      text-decoration: none;
      color: #fff;
    }

  }

`;

export const Repositories = styled.div`
  margin-top: 30px;
  max-width: 700px;

  .name {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 8px;
    display: block;
    text-decoration: none;
    margin-top: 4px;
    cursor: default;

    display: flex;
    align-items: center;

    div{
      width: 100%;
      margin: 0 10px;
      display:flex;
      align-items: center;
      justify-content: space-between;

      p {
        font-size: 14px;
        color: #303030;
        display:flex;
        align-items: flex-start;
      }
    }
}`;

export const Corpo = styled.div`

  width: 750px;
  margin-top: 40px;
  background-color: #3ba873;
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

