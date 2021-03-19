import React from "react";
import styled from "styled-components";

interface InlineIconProps {
  icon?: React.ReactNode;
}

const IconSpacer = styled.span`
  padding-right: 24px;
`;

const IconWrapper = styled.span`
  width: 15px;
  height: 15px;
  position: absolute;
  padding-top: 1px;
  user-select: none;
`;

export const InlineIcon = ({ icon }: InlineIconProps) => (
  <>
    <IconWrapper>{icon}</IconWrapper>
    <IconSpacer />
  </>
);
