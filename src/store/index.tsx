import React, { Context, createContext, useContext, useReducer } from "react";
import { PRICE_FILTER_CONFIG, PRICE_FILTER_SELECTED_NUM } from "../constants";
import { ActionNames, ActionType, AppState } from "../types";
import mockedApi from "../mocked-backend.json";

let DispatchContext: Context<any>;
let StoreContext: Context<any>;

const defaultState: AppState = {
  selectedInterval: PRICE_FILTER_CONFIG[PRICE_FILTER_SELECTED_NUM],
  salonList: [],
};

function reducer(
  state: AppState = defaultState,
  { type, payload }: ActionType
) {
  console.log("fired -> ", type, payload);
  switch (type) {
    case ActionNames.CHANGE_PRICE_FILTER:
      return { ...state, selectedInterval: payload };
    case ActionNames.FETCH_SALONS_INIT:
      return { ...state };
    case ActionNames.FETCH_SALONS_SUCCESS:
      return { ...state, salonList: payload };
    case ActionNames.FETCH_SALONS_FAILURE:
      return { ...state, salonList: mockedApi["/salons"]["get"] };
  }
}

export const StoreProvider = (props: any) => {
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

export const useDispatch = () => useContext(DispatchContext);
export const useStore = () => useContext(StoreContext);
