import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { WhiteArrowLeft } from "../../../components/Icons";

const StyledLink = styled(Link)`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  user-select: none;
`;

export const BackButton = () => (
  <StyledLink to={`/`}>
    <WhiteArrowLeft />
  </StyledLink>
);
