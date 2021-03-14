import React from "react";
import { PRICE_FILTER_CONFIG } from "../../../constants";
import { useDispatch, useStore } from "../../../store";
import { ActionNames, AppState, PriceIntervalSelected } from "../../../types";
import { PriceDropdown } from "./PriceFilterDropdown";

export const PriceDropdownContainer = () => {
  const { selectedInterval: defaultValue }: AppState = useStore();
  const dispatch = useDispatch();

  const onChange = (selected: PriceIntervalSelected) => {
    dispatch({ type: ActionNames.CHANGE_PRICE_FILTER, payload: selected });
  };

  return (
    <PriceDropdown
      {...{ onChange, defaultValue, options: PRICE_FILTER_CONFIG }}
    />
  );
};
