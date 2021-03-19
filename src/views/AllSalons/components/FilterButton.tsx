import React from "react";
import styled from "styled-components";
import { Filter } from "../../../components/Icons";
import SquaredButton from "../../../components/SquareButton";

const StyledButton = styled(SquaredButton)`
  padding-top: 1px;
`;

export const FilterButton = () => (
  <StyledButton
    onClick={() => {
      console.log("filter button clicked...");
    }}
  >
    <Filter />
  </StyledButton>
);
