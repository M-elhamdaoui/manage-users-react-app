import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../../UI/Button/Button";


export default function Form(props) {
  const [enteredAge, setEnteredAge] = useState("");
  const [enteredName, setEnteredName] = useState("");
  
  const changeName = (e) => {
    console.log(e.target.value);
    setEnteredName(e.target.value);
  };
  const changeAge = (e) => {
    setEnteredAge(e.target.value);
  };
  const addUser = (e) => {
    e.preventDefault();
    if (enteredAge === "" && enteredName === "") {
     props.messageHandler("Name and Age are empty !")
    } else if (enteredAge === "" && enteredName !== "") {
      props.messageHandler("Age is empty");
    } else if (enteredAge !== "" && enteredName === "") {
     props.messageHandler("Name is empty");
    }else if(parseInt(enteredAge)<=0){
      props.messageHandler("Age must be superiur then : 0");
    }else{
      props.addUserHandler({name:enteredName,age:enteredAge});
      setEnteredAge("");
      setEnteredName("");
    }
    
  };
  return (
   
      <FormCont onSubmit={addUser}>
        <div className="inputs">
          <div className="inputName">
            <label>Enter Name</label>
            <input type="text" onChange={changeName} value={enteredName} />
          </div>
          <div className="inputAge">
            <label>Enter Age</label>
            <input
              type="number"
              step="1"
              onChange={changeAge}
              value={enteredAge}
            />
          </div>
        </div>
        <div className="submits">
          <Button type="submit">Add User</Button>
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
  position: relative;
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
