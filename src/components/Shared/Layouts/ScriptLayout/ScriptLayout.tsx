import ScriptSidebarOnDesktop from "./ScriptList/ScriptSidebarOnDesktop/ScriptSidebarOnDesktop";
import ScriptSidebarOnMobile from "./ScriptList/ScriptSidebarOnMobile/ScriptSidebarOnMobile";
import ScriptNav from "./ScriptNav/ScriptNav";

interface IProps {
  children: React.ReactNode;
}

const ScriptLayout = ({ children }: IProps) => {
  return (
    <main className="flex bg-[#f6f8fc] overflow-hidden">
      <ScriptSidebarOnDesktop />

      <div data-aos="fade-top" data-aos-duration="300" className="flex-1">
        <ScriptNav color="inherit" position="static" />
        <ScriptSidebarOnMobile />
        <div
          data-aos="fade-left"
          data-aos-duration="300"
          className="pt-3 flex-1  px-5 lg:px-0 max-w-screen-2xl flex lg:gap-7"
        >
          {children}
        </div>
      </div>
    </main>
  );
};

export default ScriptLayout;
