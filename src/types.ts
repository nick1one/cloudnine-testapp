export interface DropdownConfig {
  value: string;
  label: string;
}

export type PriceIntervalSelected = DropdownConfig | null;

export interface AppState {
  selectedInterval: PriceIntervalSelected;
  salonList: SalonItemData[];
  activeTab: number;
}

export interface ActionType {
  type: string;
  payload: any;
}

export enum ActionNames {
  CHANGE_PRICE_FILTER = "CHANGE_PRICE_FILTER",
  SET_ACTIVE_TAB = "SET_ACTIVE_TAB",
}

export interface SalonItemData {
  name: string;
  price: number;
  rating: number;
  address: string;
  distance: number;
  someData: string;
}

export enum RatingVariant {
  small = "small",
  large = "large",
}
