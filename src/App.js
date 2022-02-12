import React, { useState } from "react";
import UserInput from "./Component/UserInput/UserInput";
import UserList from "./Component/UserList/UserList";
import styled from "styled-components";
import Overlay from "./UI/Overlay/Overlay";

function App() {
  const [user, setUser] = useState([]);
  const [message, setMessage] = useState("");

  const deleteHandler = (index) => {
    const data = [...user];

    data.splice(index, 1);
    setUser(data);
  };
  const addUserHandler=(user)=>{
    setUser((prevUsers)=>{
      return [...prevUsers,user];
    })
  }
  const messageHandler=(message)=>{
    setMessage(message);
  }
  const closeMessage =()=>{
    setMessage("");
  }
  return (
    <AppCont>
      <Overlay message={message} closeMessage={closeMessage}/>
      <UserInput
        addUserHandler={addUserHandler}
        messageHandler={messageHandler}
      />
      <UserList data={user} deleteHandler={deleteHandler} />
    </AppCont>
  );
}

export default App;

const AppCont = styled.div`
  width: 60%;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
