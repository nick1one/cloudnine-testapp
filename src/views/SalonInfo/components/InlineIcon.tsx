import React, { ReactElement } from "react";
import styled from "styled-components";

interface InlineIconProps {
  icon?: React.ReactNode;
}

const IconSpacer = styled.span`
  padding-right: 24px;
`;

const IconWrapper = styled.span`
  position: absolute;
  width: 15px;
  height: 15px;
  padding-top: 1px;
  user-select: none;
`;

export const InlineIcon = ({ icon }: InlineIconProps): ReactElement => (
  <>
    <IconWrapper>{icon}</IconWrapper>
    <IconSpacer />
  </>
);
