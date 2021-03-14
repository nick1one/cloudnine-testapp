import { nanoid } from "nanoid";
import React from "react";
import styled from "styled-components";
import { EMPTY_LIST_MESSAGE } from "../../../constants";
import { SalonItemData } from "../../../types";
import { SalonListItem } from "./SalonListItem";

interface SalonsListProps {
  salons: SalonItemData[];
}

const StyledUl = styled.ul`
  margin: 0;
  padding: 0 15px;
  max-height: 552px;
  overflow: scroll;
`;

const EmptyListMessage = styled.p`
  font-family: "HelveticaNeue-Light", sans-serif;
  text-align: center;
  margin: 50px 35px;
  color: #666666;
  font-size: 15px;
`;

export const SalonsList = ({ salons }: SalonsListProps) =>
  salons.length ? (
    <StyledUl>
      {salons.map((salon: SalonItemData) => (
        <SalonListItem {...salon} key={nanoid()} />
      ))}
    </StyledUl>
  ) : (
    <EmptyListMessage>{EMPTY_LIST_MESSAGE}</EmptyListMessage>
  );
