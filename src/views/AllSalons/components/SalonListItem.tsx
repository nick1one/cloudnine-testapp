import { nanoid } from "nanoid";
import React from "react";
import styled from "styled-components";
import { Rating } from "../../../components/Rating";
import { RatingVariant, SalonItemData } from "../../../types";
import { OpenSalonLink } from "./OpenSalonLink";

const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px #eeeeee;
  padding-top: 15px;
`;

const FirstColumn = styled.p`
  margin-top: 5px;
  font-family: "HelveticaNeue", sans-serif;
  font-size: 15px;
  text-align: left;
  color: #202020;
`;
const SecondColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-left: 16px;
`;
const ThirdColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
`;

const Title = styled.h2`
  margin: 2px 0 0 0;
  font-family: "MillerBanner", serif;
  font-size: 20px;
  font-weight: 300;
  color: #202020;
`;

const AddressLine = styled.p`
  font-family: "HelveticaNeue", sans-serif;
  font-size: 15px;
  letter-spacing: -0.2px;
  color: #666666;
  margin-top: 9px;
`;

const Price = styled.p`
  font-family: "HelveticaNeue", sans-serif;
  font-size: 15px;
  color: #202020;
  margin-top: 6px;
  margin-bottom: 13px;
`;
const TimeToDrive = styled.p`
  font-family: "HelveticaNeue", sans-serif;
  font-size: 13px;
  color: #666666;
  margin-top: 0;
`;

const salonId = nanoid();

export const SalonListItem = ({ name, address, price }: SalonItemData) => (
  <StyledLi key={salonId}>
    <FirstColumn>12.00</FirstColumn>
    <SecondColumnWrapper>
      <Title>{name}</Title>
      <Rating rating={32} size={RatingVariant.small} />
      <AddressLine>{address}</AddressLine>
    </SecondColumnWrapper>
    <ThirdColumnWrapper>
      <Price>{price} kr</Price>
      <TimeToDrive>32 min</TimeToDrive>
    </ThirdColumnWrapper>
    <OpenSalonLink salonId={salonId} />
  </StyledLi>
);
