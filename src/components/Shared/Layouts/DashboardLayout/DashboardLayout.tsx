import ListDashboardBigSize from "./ListDashboard/ListDashboardBigSize/ListDashboardBigSize";
import ListDashboardMobile from "./ListDashboard/ListDashboardMobile/ListDashboardMobile";
import DashboardNav from "./Nav/DashboardNav";

interface IProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: IProps) => {

  return (
    <main className="flex bg-tinted-50 max-w-screen-2xl mx-auto relative">
      <ListDashboardBigSize />

      <div className="flex-1">
        <DashboardNav color="inherit" position="static" />
        <ListDashboardMobile />
        <div className="px-5 py-2 lg:py-14 flex-1  sm:px-10 ">{children}</div>
      </div>

    </main>
  );
};

export default DashboardLayout;
