import React from 'react'
import styled from 'styled-components';
import Button from '../../../UI/Button/Button';

export default function Form() {
  return (
    <FormCont>
      <div className="inputs">
        <div className="inputName">
          <label>Enter Name</label>
          <input type="text" />
        </div>
        <div className="inputAge">
          <label>Enter Age</label>
          <input type="number" step="1" min="0" />
        </div>
      </div>
      <div className='submits'>
        <Button type='submit'>Add User</Button>
      </div>
    </FormCont>
  );
}

const FormCont = styled.form`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & .inputs {
    color: #f2f2f2;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 60%;
  }
  & label {
    margin-bottom: 5px;
  }
  & .inputName,
  .inputAge {
    display: flex;
    width: 60%;
    flex-direction: column;
    justify-content: space-between;
  }
  & input {
    width: 100%;
    height: 1.5rem;
    border: 2px solid #222d65;
    transition: all 0.3s ease-in-out;
  }
  & input:focus {
    border-color: #d9edf8;
  }
  & .submits {
    padding-top: 20px;
    align-self: flex-start;
  }
`;