import React, { useEffect } from "react";
import { API } from "../../../constants";
import { useDispatch, useStore } from "../../../store";
import {
  ActionNames,
  AppState,
  DropdownConfig,
  SalonItemData,
} from "../../../types";
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
  return salonList.filter(
    ({ price }: SalonItemData): Boolean => {
      return price >= minPrice && price <= maxPrice;
    }
  );
};

export const SalonsListContainer = () => {
  const { selectedInterval, salonList }: AppState = useStore();
  const dispatch = useDispatch();

  useEffect(() => {
    // if () return;
    let didCancel = false;
    console.log("click");

    // const fetchSalons = async () => {
    //   dispatch({ type: ActionNames.FETCH_SALONS_INIT });
    //   try {
    //     const response: Response = await fetch(API.FETCH_SALONS);
    //     if (!didCancel && !salonList.length) {
    //       const payload = await response.json();
    //       dispatch({
    //         type: ActionNames.FETCH_SALONS_SUCCESS,
    //         payload,
    //       });
    //     }
    //   } catch (error) {
    //     if (!didCancel) {
    //       console.log(`Can't fetch salons! Details: ${error}`);
    //       dispatch({ type: ActionNames.FETCH_SALONS_FAILURE });
    //     }
    //   }
    // };
    // fetchSalons();
  }, []);

  const outputList = selectedInterval
    ? filterByPrice(salonList, selectedInterval)
    : salonList;

  return <SalonsList salons={outputList} />;
};
