import { useRouter } from "next/router";
import { SyntheticEvent, useState } from "react";

const useScriptLayout = () => {
  const { push } = useRouter();
  const [openCompleteDrawer, setOpenCompleteDrawer] = useState(true);
  const [openInformationTab, setOpenInformationTab] = useState(0);
  const [activeRoute, setActiveRoute] = useState(0);

  const handleOpenCompleteDrawer = (value: number, route: string) => () => {
    setOpenInformationTab(value);
    setOpenCompleteDrawer((prevState) => !prevState);
    push(route);
  };

  const handleActiveRoute = (
    event: SyntheticEvent<Element, Event>,
    newValue: number
  ) => {
    setActiveRoute(newValue);
  };

  return {
    openCompleteDrawer,
    openInformationTab,
    activeRoute,
    handleOpenCompleteDrawer,
    handleActiveRoute,
  };
};

export default useScriptLayout;
