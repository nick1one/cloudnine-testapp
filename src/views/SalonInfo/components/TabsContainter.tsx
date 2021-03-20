import { Tabs } from "./Tabs";
import { useDispatch, useStore } from "../../../store";
import { ActionNames, AppState } from "../../../types";

export const TabsContainer = () => {
  const { activeTab }: AppState = useStore();
  const dispatch = useDispatch();
  const tabConfig = {
    titles: ["Info", "Schema"],
    activeTab,
    onClick: (activeTab: number) => {
      dispatch({ type: ActionNames.SET_ACTIVE_TAB, payload: activeTab });
    },
  };

  return <Tabs {...tabConfig} />;
};
