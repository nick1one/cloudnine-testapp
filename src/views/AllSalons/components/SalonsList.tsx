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
  overflow: scroll;
  max-height: 552px;
  padding: 0 15px;
  margin: 0;
`;

const EmptyListMessage = styled.p`
  margin: 50px 35px;
  color: #666;
  font-family: "HelveticaNeue-Light", sans-serif;
  font-size: 15px;
  text-align: center;
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
