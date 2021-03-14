import React from "react";
import styled from "styled-components";
import SquaredButton from "../../../components/SquareButton";
import filter from "../../../svg/filter.svg";

const StyledButton = styled(SquaredButton)`
  padding-top: 1px;
`;

export const FilterButton = () => (
  <StyledButton
    onClick={() => {
      console.log("filter button clicked...");
    }}
  >
    <img src={filter} alt="Filter" />
  </StyledButton>
);
