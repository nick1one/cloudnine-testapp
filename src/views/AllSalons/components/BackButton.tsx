import React from "react";
import styled from "styled-components";
import { ArrowLeft } from "../../../components/Icons";
import SquaredButton from "../../../components/SquareButton";

const StyledButton = styled(SquaredButton)`
  padding-top: 1px;
  text-align: left;
`;

export const BackButton = () => (
  <StyledButton
    onClick={() => {
      console.log("Back button clicked...");
    }}
  >
    <ArrowLeft />
  </StyledButton>
);
