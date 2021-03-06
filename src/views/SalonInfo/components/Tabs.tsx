import React, { ReactElement } from "react";
import styled from "styled-components";
import { SingleTab } from "./Tab";

const StyledWrapper = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
`;

interface TabsProps {
  titles: string[];
  activeTab: number;
  onClick: (i: number) => void;
}

export const Tabs = ({
  titles,
  activeTab,
  onClick,
}: TabsProps): ReactElement => {
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
