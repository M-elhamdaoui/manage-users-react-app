import React from "react";
import styled from "styled-components";
import User from "../User/User";
export default function UserList(props) {
  const data=props.data.map((elem,index)=>{
    return <User name={elem.name} age={elem.age} key={index} delete={()=>props.deleteHandler(index)} />;
  })
  return (
    <UserListCont>
      {data.reverse()}
    </UserListCont>
  );
}

const UserListCont = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 80%;
    height: auto;
`;
