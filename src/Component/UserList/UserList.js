import React from 'react'
import styled from 'styled-components'
import User from '../User/User'
export default function UserList() {
  return (
    <UserListCont><User/></UserListCont>
  )
}

const UserListCont =styled.div`
        height: 30%;

`