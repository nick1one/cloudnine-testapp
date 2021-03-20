import React from "react";
import styled from "styled-components";
import { Heart } from "../../../components/Icons";
import SquareButton from "../../../components/SquareButton";

const StyledButton = styled(SquareButton)`
  display: flex;
  width: 40px;
  height: 36px;
  align-items: center;
  justify-content: flex-end;
`;

export const FavoriteButton = () => (
  <StyledButton
    onClick={() => {
      console.log("Add to favorite button was pushed");
    }}
  >
    <Heart alt="Add to favorites" />
  </StyledButton>
);
