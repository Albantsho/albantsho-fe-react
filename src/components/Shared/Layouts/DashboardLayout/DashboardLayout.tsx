import ListDashboardBigSize from "./ListDashboard/ListDashboardBigSize/ListDashboardBigSize";
import ListDashboardMobile from "./ListDashboard/ListDashboardMobile/ListDashboardMobile";
import DashboardNav from "./Nav/DashboardNav";

interface IProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: IProps) => {
  return (
    <main className="flex bg-[#E5E5E5]  relative">
      <ListDashboardBigSize />

      <div className="flex-1  ">
        <DashboardNav color="inherit" position="static" />
        <ListDashboardMobile />
        <div className="px-5 pt-2 lg:pt-14 flex-1  sm:px-10 max-w-screen-2xl">
          {children}
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
