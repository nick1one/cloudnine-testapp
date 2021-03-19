import React from "react";
import styled from "styled-components";
import { FormattedParagraph } from "./FormattedParagraph";
import { InlineIcon } from "./InlineIcon";

interface ContentLineProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const StyledParagraph = styled(FormattedParagraph)`
  margin: 0;
  padding-top: 13px;
  padding-bottom: 16px;
  border-bottom: solid 0.5px #eeeeee;
`;

export const ContentLine = ({ children, icon }: ContentLineProps) => {
  return (
    <StyledParagraph>
      {icon && <InlineIcon icon={icon} />}
      {children}
    </StyledParagraph>
  );
};
