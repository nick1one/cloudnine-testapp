import styled from "styled-components";

const buttonSize = 20;

const SquaredButton = styled.button`
  border: 0;
  padding: 0;
  cursor: pointer;
  background: none;
  outline: none;
  height: ${buttonSize}px;
  width: ${buttonSize}px;
`;

export default SquaredButton;
