import AdminDashboardNav from "./AdminDashboardNav/AdminDashboardNav";
import AdminDashboardSidebarOnDesktop from "./AminDashboardList/AdminDashboardSidebarOnDesktop/AdminDashboardSidebarOnDesktop";
import AdminDashboardSidebarOnMobile from "./AminDashboardList/AdminDashboardSidebarOnMobile/AdminDashboardSidebarOnMobile";

interface IProps {
  children: React.ReactNode;
}

const AdminDashboardLayout = ({ children }: IProps) => {
  return (
    <main className="flex bg-[#f6f8fc]">
      <AdminDashboardSidebarOnDesktop />
      <div className="flex-1 overflow-hidden">
        <AdminDashboardNav color="inherit" position="static" />
        <AdminDashboardSidebarOnMobile />
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

export default AdminDashboardLayout;
