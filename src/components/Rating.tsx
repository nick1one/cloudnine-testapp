import React from "react";
import styled from "styled-components";
import { RatingVariant } from "../types";
import { RatingStar } from "./RatingStar";

interface RatingProps {
  rating: number;
  size: RatingVariant;
}

const RatingNumber = styled("span")<RatingProps>`
  font-family: "HelveticaNeue", sans-serif;
  font-weight: 300;
  font-size: 11px;
  color: #656565;
  margin-left: 6px;

  ${({ size }: RatingProps) =>
    size === RatingVariant.large &&
    `
    color: #ffffff;
    font-size: 13px;
    margin-left: 5px;
    line-height: 17px;
    vertical-align: top;
  `}
`;

const StarsWrapper = styled.span`
  cursor: pointer;
  user-select: none;
`;

const RatingWrapper = styled("span")<RatingProps>`
  margin-top: ${({ size }: RatingProps) =>
    size === RatingVariant.small ? "8px" : "2px"}; ;
`;

export const Rating = (props: RatingProps) => (
  <RatingWrapper {...props}>
    <StarsWrapper>
      {[...Array(5)].map((e, i) => (
        <RatingStar size={props.size} filled={i < 3} key={i} />
      ))}
    </StarsWrapper>
    <RatingNumber {...props}>({props.rating})</RatingNumber>
  </RatingWrapper>
);
