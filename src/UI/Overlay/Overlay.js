import React from 'react'
import styled from 'styled-components'
import Button from '../Button/Button';
export default function Overlay(props) {
    if(props.message===""){
        return null ;
    }
    
  return (
    <OverlayCont>
      <div className="typeCont">
        <p>Input Invalid !</p>
      </div>
      <div className="messageCont">
        <p>{props.message}</p>
      </div>
      <div className="buttonCont">
        <Button onClick={props.closeMessage}>Okey</Button>
      </div>
    </OverlayCont>
  );
}

const OverlayCont = styled.div`
  z-index: 50;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 45%;
  width: 60%;
  position: fixed;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 2px 5px black;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  & .typeCont {
    flex: 0.2;
    color: white;
    background-color: #262626;
    padding:0 10px;
    font-size: 1.2em;
    border-radius: 20px 20px 0 0;
    box-sizing: border-box;
  }
  & .messageCont{
      flex:0.7;
      padding: 0 10px;
  }
  & .buttonCont{
      align-self: flex-end;
      padding: 0 60px;
  }
`;
