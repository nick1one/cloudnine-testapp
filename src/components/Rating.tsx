import React, { ReactElement } from "react";
import styled from "styled-components";
import { RatingVariant } from "../types";
import { RatingStar } from "./RatingStar";

interface RatingProps {
  rating: number;
  size: RatingVariant;
}

const RatingNumber = styled("span")<RatingProps>`
  margin-left: 6px;
  color: #656565;
  font-family: "HelveticaNeue", sans-serif;
  font-size: 11px;
  font-weight: 300;
  /* stylelint-disable */
  ${({ size }: RatingProps) =>
    size === RatingVariant.large &&
    `
    color: #ffffff;
    font-size: 13px;
    margin-left: 5px;
    line-height: 17px;
    vertical-align: top;
  `}/* stylelint-enable */
`;

const StarsWrapper = styled.span`
  cursor: pointer;
  user-select: none;
`;

const RatingWrapper = styled("span")<RatingProps>`
  /* stylelint-disable */
  margin-top: ${({ size }: RatingProps) =>
    size === RatingVariant.small ? "8px" : "2px"};
  /* stylelint-enable */
`;

export const Rating = (props: RatingProps): ReactElement => (
  <RatingWrapper {...props}>
    <StarsWrapper>
      {[...Array(5)].map((e, i) => (
        <RatingStar size={props.size} filled={i < 3} key={i} />
      ))}
    </StarsWrapper>
    <RatingNumber {...props}>({props.rating})</RatingNumber>
  </RatingWrapper>
);
