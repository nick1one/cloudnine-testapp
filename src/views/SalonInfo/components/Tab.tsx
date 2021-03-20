import React, { ReactElement } from "react";
import styled from "styled-components";

const StyledTab = styled.li`
  display: block;
  height: 50px;
  box-sizing: border-box;
  flex: 1;
  border-bottom: solid 0.5px #eee;
  background: #fff;
  color: #202020;
  cursor: pointer;
  font-family: "HelveticaNeue", sans-serif;
  font-size: 15px;
  line-height: 49px;
  text-align: center;
  user-select: none;

  &:hover {
    border-bottom: solid 2px #eee;
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

export const SingleTab = ({
  active,
  onClick,
  children,
}: SingleTabProps): ReactElement =>
  active ? (
    <ActiveTab onClick={onClick}>{children}</ActiveTab>
  ) : (
    <StyledTab onClick={onClick}>{children}</StyledTab>
  );
