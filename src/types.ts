export interface DropdownConfig {
  value: string;
  label: string;
}

export type PriceIntervalSelected = DropdownConfig | null;

export interface AppState {
  selectedInterval: PriceIntervalSelected;
  salonList: SalonItemData[];
}

export interface ActionType {
  type: string;
  payload: any;
}

export enum ActionNames {
  CHANGE_PRICE_FILTER = "CHANGE_PRICE_FILTER",
  FETCH_SALONS_INIT = "FETCH_SALONS_INIT",
  FETCH_SALONS_SUCCESS = "FETCH_SALONS_SUCCESS",
  FETCH_SALONS_FAILURE = "FETCH_SALONS_FAILURE",
}

export interface SalonItemData {
  name: string;
  price: number;
  rating: number;
  address: string;
  distance: number;
  someData: string;
}
