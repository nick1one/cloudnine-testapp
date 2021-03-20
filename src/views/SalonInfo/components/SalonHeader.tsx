import React, { ReactElement } from "react";
import styled from "styled-components";
import img from "../../../assets/image.jpg";
import { Rating } from "../../../components/Rating";
import { RatingVariant } from "../../../types";
import { BackButton } from "./BackButton";
import { FavoriteButton } from "./FavoriteButton";

const StyleTitle = styled.h1`
  flex: 1 100%;
  margin: 115px 5px 5px 5px;
  color: #fff;
  font-family: "MillerBanner", serif;
  font-size: 22px;
  font-weight: 300;
`;

const Banner = styled.div`
  display: flex;
  height: 251px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-between;
  padding: 25px 10px 0 10px;
  margin-top: -20px;
  background-image: linear-gradient(to bottom, transparent 50%, #000),
    url(${img});
`;

const StyledRating = styled(Rating)`
  span:first-child {
    margin-left: 5px;
  }
`;

export const SalonHeader = (): ReactElement => (
  <Banner>
    <BackButton />
    <FavoriteButton />
    <StyleTitle>Salong Namn</StyleTitle>
    <StyledRating rating={32} size={RatingVariant.large} />
  </Banner>
);
