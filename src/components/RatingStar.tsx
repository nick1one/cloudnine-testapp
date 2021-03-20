import React from "react";
import styled from "styled-components";
import { RatingVariant } from "../types";
import { StarFilled, StarOutlined } from "./Icons";

interface RatingStarProps {
  filled: boolean;
  size: RatingVariant;
}

const getGapSize = (size: RatingVariant): string =>
  size === RatingVariant.small ? "3px" : "5px";

const getWidth = (size: RatingVariant): string =>
  size === RatingVariant.large ? "12px" : "";

const StarWrapper = styled("b")<{
  size: RatingVariant;
}>`
  /* stylelint-disable */
  margin-right: ${({ size }: { size: RatingVariant }) => getGapSize(size)};
  /* stylelint-enable */
`;

export const RatingStar = ({ filled, size }: RatingStarProps) => (
  <StarWrapper size={size}>
    {filled ? (
      <StarFilled size={size} width={getWidth(size)} />
    ) : (
      <StarOutlined size={size} width={getWidth(size)} />
    )}
  </StarWrapper>
);
