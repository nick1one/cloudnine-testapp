import React from "react";
import styled from "styled-components";

const StyledTab = styled.li`
  box-sizing: border-box;
  display: block;
  flex: 1;
  height: 50px;
  font-family: "HelveticaNeue", sans-serif;
  font-size: 15px;
  line-height: 49px;
  text-align: center;
  color: #202020;
  background: #fff;
  border-bottom: solid 0.5px #eeeeee;
  cursor: pointer;
  user-select: none;

  &:hover {
    border-bottom: solid 2px #eeeeee;
    color: #666;
  }
`;

const ActiveTab = styled(StyledTab)`
  border-bottom: solid 2px #b69f58;
  &:hover {
    border-bottom: solid 2px #b69f58;
    color: #666;
  }
`;

interface SingleTabProps {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

export const SingleTab = ({ active, onClick, children }: SingleTabProps) =>
  active ? (
    <ActiveTab onClick={onClick}>{children}</ActiveTab>
  ) : (
    <StyledTab onClick={onClick}>{children}</StyledTab>
  );
