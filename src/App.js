import React ,{useState} from "react";
import UserInput from "./Component/UserInput/UserInput";
import UserList from "./Component/UserList/UserList";
import styled from "styled-components";

function App() {

  const [user,setUser]=useState([{name:"Moammed",age:22}]);
  return (
    <AppCont>
      <UserInput />
      <UserList data={user} />
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