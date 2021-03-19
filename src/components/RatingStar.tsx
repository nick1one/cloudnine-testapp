import React from "react";
import styled from "styled-components";
import starFilled from "../assets/star-filled.svg";
import starOutlined from "../assets/star-outlined.svg";
import { RatingVariant } from "../types";

interface RatingStarProps {
  filled: boolean;
  size: RatingVariant;
}

const StyledImg = styled("img")<{ size: RatingVariant }>`
  margin-right: ${({ size }: { size: RatingVariant }) =>
    size === RatingVariant.small ? "3px" : "5px"};
`;

export const RatingStar = ({ filled, size }: RatingStarProps) => (
  <StyledImg
    size={size}
    width={size === RatingVariant.large ? "12px" : ""}
    src={filled ? starFilled : starOutlined}
    alt=""
  />
);
