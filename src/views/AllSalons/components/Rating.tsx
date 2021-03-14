import React from "react";
import styled from "styled-components";
import starFilled from "../../../svg/star-filled.svg";
import starOutlined from "../../../svg/star-outlined.svg";

const RatingNumber = styled.span`
  font-family: "HelveticaNeue", sans-serif;
  font-size: 11px;
  color: #656565;
  margin-left: 6px;
`;

const StarsWrapper = styled.span`
  img {
    margin-right: 3px;
  }
`;
const RatingWrapper = styled.span`
  margin-top: 8px;
`;

export const Rating = () => (
  <RatingWrapper>
    <StarsWrapper>
      <img src={starFilled} alt="" />
      <img src={starFilled} alt="" />
      <img src={starFilled} alt="" />
      <img src={starOutlined} alt="" />
      <img src={starOutlined} alt="" />
    </StarsWrapper>
    <RatingNumber>(32)</RatingNumber>
  </RatingWrapper>
);
