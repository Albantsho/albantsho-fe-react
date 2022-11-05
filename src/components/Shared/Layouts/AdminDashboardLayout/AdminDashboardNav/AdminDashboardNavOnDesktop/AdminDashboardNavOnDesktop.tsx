import ProfileMenu from "@shared/ProfileMenu/ProfileMenu";

const AdminDashboardNavOnDesktop = () => {
  return (
    <div className="lg:flex px-1 flex-1 justify-end items-center hidden">
      <ProfileMenu />
    </div>
  );
};

export default AdminDashboardNavOnDesktop;
