import React from "react";
import styled from "styled-components";
import SquaredButton from "../../../components/SquareButton";
import backIcon from "../../../svg/arrow-left.svg";

const StyledButton = styled(SquaredButton)`
  text-align: left;
  padding-top: 1px;
`;

export const BackButton = () => (
  <StyledButton
    onClick={() => {
      console.log("Back button clicked...");
    }}
  >
    <img src={backIcon} alt="Back" />
  </StyledButton>
);
