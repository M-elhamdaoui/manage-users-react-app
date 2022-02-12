import React from 'react'
import styled from 'styled-components'

export default function User(props) {
  return (
    <UserCont>
        <p>{props.name} (age : {props.age}yo)</p>
    </UserCont>
  )
}

const UserCont=styled.div`
    width: auto;
    background-color: #222;
`