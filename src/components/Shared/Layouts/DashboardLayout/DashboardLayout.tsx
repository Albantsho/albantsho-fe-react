import DashboardSidebarOnDesktop from "./DashboardList/DashboardSidebarOnDesktop/DashboardSidebarOnDesktop";
import DashboardSidebarOnMobile from "./DashboardList/DashboardSidebarOnMobile/DashboardSidebarOnMobile";
import DashboardNav from "./DashboardNav/DashboardNav";

interface IProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: IProps) => {
  return (
    <main className="flex bg-[#f6f8fc]">
      <DashboardSidebarOnDesktop />
      <div className="flex-1 overflow-hidden">
        <DashboardNav color="inherit" position="static" />
        <DashboardSidebarOnMobile />
        <div
          data-aos="fade-left"
          data-aos-duration="300"
          className="px-5 pt-2 lg:pt-14 flex-1 sm:px-10 max-w-screen-2xl"
        >
          {children}
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
