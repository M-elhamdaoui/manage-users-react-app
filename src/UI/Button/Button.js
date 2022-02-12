import styled from "styled-components";

const Button = styled.button`
  background-color: #034aa6;
  outline: none;
  border: none;
  color: snow;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #162c40;
  }
`;
export default Button;