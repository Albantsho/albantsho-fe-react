import Nav from "@shared/Layouts/GeneralLayout/Nav/Nav";

import ListDashboardBigSize from "./ListDashboard/ListDashboardBigSize/ListDashboardBigSize";
import ListDashboardMobile from "./ListDashboard/ListDashboardMobile/ListDashboardMobile";
interface IProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: IProps) => {
  return (
    <main className="flex">
      <ListDashboardBigSize />
      <div className="flex-1 block">
        <Nav color="inherit" position="static" />
        <ListDashboardMobile />
        {children}
      </div>
    </main>
  );
};

export default DashboardLayout;
