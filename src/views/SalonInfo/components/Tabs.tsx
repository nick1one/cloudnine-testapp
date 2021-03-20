import React from "react";
import styled from "styled-components";
import { SingleTab } from "./Tab";

const StyledWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
`;

interface TabsProps {
  titles: string[];
  activeTab: number;
  onClick: (i: number) => void;
}

export const Tabs = ({ titles, activeTab, onClick }: TabsProps) => {
  return (
    <StyledWrapper>
      {titles.map((tabName, i) => (
        <SingleTab
          key={i}
          active={i === activeTab}
          onClick={onClick.bind(null, i)}
        >
          {tabName}
        </SingleTab>
      ))}
    </StyledWrapper>
  );
};
