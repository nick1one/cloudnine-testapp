import styled from "styled-components";

const buttonSize = 20;

const SquaredButton = styled.button`
  /* stylelint-disable */
  width: ${buttonSize}px;
  height: ${buttonSize}px;
  /* stylelint-enable */
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
  outline: none;
  user-select: none;
`;

export default SquaredButton;
