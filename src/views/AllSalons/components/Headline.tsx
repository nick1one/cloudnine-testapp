import styled from "styled-components";
import React from "react";
import { BackButton } from "./BackButton";
import { FilterButton } from "./FilterButton";

interface HeadlineProps {
  title: string;
}

const CentralTitle = styled.h1`
  margin: 8px 0 10px 0;
  font-family: "MillerBanner", serif;
  font-size: 22px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.13px;
  text-align: center;
  color: #202020;
`;

const StyledHeadline = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #b69f58;
  padding: 0 15px;
`;

export const Headline = ({ title }: HeadlineProps) => (
  <StyledHeadline>
    <BackButton />
    <CentralTitle>{title}</CentralTitle>
    <FilterButton />
  </StyledHeadline>
);
