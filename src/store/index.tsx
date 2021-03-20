import React, {
  Context,
  createContext,
  Dispatch,
  ReactElement,
  useContext,
  useReducer,
} from "react";
import {
  PRICE_FILTER_CONFIG,
  PRICE_FILTER_SELECTED_NUM,
  SALONS_LIST,
} from "../constants";
import { ActionNames, ActionType, AppState } from "../types";

let DispatchContext: Context<any>;
let StoreContext: Context<any>;

const defaultState: AppState = {
  selectedInterval: PRICE_FILTER_CONFIG[PRICE_FILTER_SELECTED_NUM],
  salonList: SALONS_LIST,
  activeTab: 0,
};

function reducer(
  state: AppState = defaultState,
  { type, payload }: ActionType
) {
  console.log(type, payload);
  switch (type) {
    case ActionNames.CHANGE_PRICE_FILTER:
      return { ...state, selectedInterval: payload };
    case ActionNames.SET_ACTIVE_TAB:
      return { ...state, activeTab: payload };
    default:
      return { ...state };
  }
}
interface StoreProviderType {
  children: React.ReactNode;
}
export const StoreProvider = (props: StoreProviderType): ReactElement => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  DispatchContext = createContext(dispatch);
  StoreContext = createContext(state);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StoreContext.Provider value={state}>
        {props.children}
      </StoreContext.Provider>
    </DispatchContext.Provider>
  );
};
export const useDispatch = (): Dispatch<ActionType> =>
  useContext(DispatchContext);
export const useStore = (): AppState => useContext(StoreContext);
