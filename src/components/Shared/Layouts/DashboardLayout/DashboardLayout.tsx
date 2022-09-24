import DashboardSidebarOnDesktop from "./ListDashboard/DashboardSidebarOnDesktop/DashboardSidebarOnDesktop";
import DashboardSidebarOnMobile from "./ListDashboard/DashboardSidebarOnMobile/DashboardSidebarOnMobile";
import DashboardNav from "./DashboardNav/DashboardNav";

interface IProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: IProps) => {
  return (
    <main className="flex bg-[#f6f8fc]  relative ">
      <DashboardSidebarOnDesktop />

      <div className="flex-1">
        <DashboardNav color="inherit" position="static" />
        <DashboardSidebarOnMobile />
        <div className="px-5 pt-2 lg:pt-14 flex-1  sm:px-10 max-w-screen-2xl">
          {children}
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
