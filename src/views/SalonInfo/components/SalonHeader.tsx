import React from "react";
import styled from "styled-components";
import img from "../../../assets/image.jpg";
import { Rating } from "../../../components/Rating";
import { RatingVariant } from "../../../types";
import { BackButton } from "./BackButton";
import { FavoriteButton } from "./FavoriteButton";

const StyleTitle = styled.h1`
  flex: 1 100%;
  margin: 115px 5px 5px 5px;
  color: #ffffff;
  font-family: "MillerBanner", serif;
  font-size: 22px;
  font-weight: 300;
`;

const Banner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 251px;
  margin-top: -20px;
  padding: 25px 10px 0 10px;
  background-image: url(${img});
  box-sizing: border-box;
  align-content: flex-start;
`;

const StyledRating = styled(Rating)`
  span:first-child {
    margin-left: 5px;
  }
`;

export const SalonHeader = () => (
  <Banner>
    <BackButton />
    <FavoriteButton />
    <StyleTitle>Salong Namn</StyleTitle>
    <StyledRating rating={32} size={RatingVariant.large} />
  </Banner>
);
