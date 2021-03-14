import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import arrowRight from "../../../svg/arrow-right.svg";

const StyledLink = styled(Link)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 35px;
`;

const StyledImg = styled.img`
  margin-bottom: 11px;
`;

export const OpenSalonLink = ({ salonId }: { salonId: string }) => (
  <StyledLink to={`/salon-info/${salonId}`}>
    <StyledImg src={arrowRight} alt="" />
  </StyledLink>
);
