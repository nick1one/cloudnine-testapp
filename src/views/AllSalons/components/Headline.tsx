import styled from "styled-components";
import React from "react";
import { BackButton } from "./BackButton";
import { FilterButton } from "./FilterButton";

interface HeadlineProps {
  title: string;
}

const CentralTitle = styled.h1`
  margin: 8px 0 10px 0;
  color: #202020;
  font-family: "MillerBanner", serif;
  font-size: 22px;
  font-stretch: normal;
  font-style: normal;
  font-weight: 300;
  letter-spacing: -0.13px;
  line-height: normal;
  text-align: center;
`;

const StyledHeadline = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  border-bottom: 1px solid #b69f58;
`;

export const Headline = ({ title }: HeadlineProps) => (
  <StyledHeadline>
    <BackButton />
    <CentralTitle>{title}</CentralTitle>
    <FilterButton />
  </StyledHeadline>
);
