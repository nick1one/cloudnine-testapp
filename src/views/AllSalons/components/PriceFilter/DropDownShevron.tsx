import React, { ReactElement } from "react";
import styled from "styled-components";
import { DownArrow } from "../../../../components/Icons";

const Wrapper = styled.div`
  width: 42px;
  height: 35px;
  padding-top: 14px;
  cursor: pointer;
  text-align: center;
  user-select: none;
`;

export const DropDownShevron = (): ReactElement => (
  <Wrapper>
    <DownArrow />
  </Wrapper>
);
