import React from "react";
import styled from "styled-components";
import { DownArrow } from "../../../../components/Icons";

const Wrapper = styled.div`
  width: 42px;
  height: 35px;
  padding-top: 14px;
  text-align: center;
  cursor: pointer;
  user-select: none;
`;

export const DropDownShevron = () => (
  <Wrapper>
    <DownArrow />
  </Wrapper>
);
