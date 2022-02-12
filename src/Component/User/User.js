import React from 'react'
import styled from 'styled-components'

export default function User(props) {
  return (
    <UserCont>
        <p>Mohammed (age : 22yo)</p>
    </UserCont>
  )
}

const UserCont = styled.div`
  color: #0d0d0d;
  background-color: #bfbfbf;
  height: 3rem;
  width: 80%;
  border-radius: 8px;
display: flex;
justify-content: flex-start;
align-items: center;
cursor: pointer;
margin-bottom: 1rem;
  transition: all 0.3s ease-in-out;

  & p {
        margin-left: 20px;

  }
  &:hover {
    background-color: #f25252;
  }
`;