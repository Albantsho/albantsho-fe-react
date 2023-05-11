import ProfileNav from "@shared/ProfileNav/ProfileNav";
import AiSidebarOnDesktop from "./AiList/AiSidebarOnDesktop/AiSidebarOnDesktop";
import AiSidebarOnMobile from "./AiList/AiSidebarOnMobile/AiSidebarOnMobile";

interface IProps {
  children: React.ReactNode;
}

const AiLayout = ({ children }: IProps) => {
  return (
    <main className="flex bg-[#f6f8fc]">
      <AiSidebarOnDesktop />
      <div className="flex-1 overflow-hidden text-primary-main">
        <ProfileNav position="static" color="inherit" />
        <AiSidebarOnMobile />
        <div className="px-5 py-10 space-y-5 flex-1 sm:px-10 max-w-screen-xl">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AiLayout;
