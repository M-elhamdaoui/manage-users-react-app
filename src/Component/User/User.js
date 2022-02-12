import React,{useState} from 'react'
import styled from 'styled-components'
import deleteIcone from '../../Assets/Icones/icon-delete.svg';

export default function User(props) {
  const [showDelete,setShowDelete]=useState(false);
  const mouseEnterHandle=(e)=>{
    setShowDelete(true);
  }
  const mouseLeaveHandle=(e)=>{
    setShowDelete(false);
  }
  return (
    <UserCont
      onClick={props.delete}
      onMouseEnter={mouseEnterHandle}
      onMouseLeave={mouseLeaveHandle}
    >
      <p>
        {props.name} (age : {props.age}yo)
      </p>
      <img
        src={deleteIcone}
        alt="delete"
        className={showDelete ? "visible" : "invisible"}
      />
    </UserCont>
  );
}

const UserCont = styled.div`
  color: #0d0d0d;
  background-color: #bfbfbf;
  height: 3rem;
  width: 80%;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-bottom: 1rem;
  padding: 0 30px;
  transition: all 0.3s ease-in-out;

  & p {
    pointer-events: none;
  }
  &:hover {
    background-color: #f25252;
  }
  & img {
    pointer-events: none;
  }

  & .visible {
    display: block;
  }
  & .invisible {
    display: none;
  }
`;