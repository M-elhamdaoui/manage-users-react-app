import React from "react";
import styled from "styled-components";
import User from "../User/User";
export default function UserList() {
  return (
    <UserListCont>
      <User />
      <User />
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
