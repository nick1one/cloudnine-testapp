import React, { ReactElement } from "react";
import { useStore } from "../../../store";
import { AppState, DropdownConfig, SalonItemData } from "../../../types";
import { SalonsList } from "./SalonsList";

const getMinMax = (selectedInterval: DropdownConfig): number[] => {
  const { value: activePriceInterval } = selectedInterval;
  return activePriceInterval.split("-").map((str) => Number(str));
};

const filterByPrice = (
  salonList: SalonItemData[],
  selectedInterval: DropdownConfig
): SalonItemData[] => {
  const [minPrice, maxPrice] = getMinMax(selectedInterval);
  return salonList.filter(({ price }: SalonItemData): boolean => {
    return price >= minPrice && price <= maxPrice;
  });
};

export const SalonsListContainer = (): ReactElement => {
  const { selectedInterval, salonList }: AppState = useStore();

  const outputList = selectedInterval
    ? filterByPrice(salonList, selectedInterval)
    : salonList;

  return <SalonsList salons={outputList} />;
};
