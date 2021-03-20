import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import arrowRight from "../../../assets/arrow-right.svg";

const StyledLink = styled(Link)`
  display: flex;
  width: 35px;
  align-items: center;
  justify-content: flex-end;
  user-select: none;
`;

const StyledImg = styled.img`
  margin-bottom: 11px;
`;

export const OpenSalonLink = ({ salonId }: { salonId: string }) => (
  <StyledLink to={`/salon-info/${salonId}`}>
    <StyledImg src={arrowRight} alt="" />
  </StyledLink>
);
