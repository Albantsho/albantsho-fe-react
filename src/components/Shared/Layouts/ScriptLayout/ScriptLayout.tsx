import ScriptSidebarOnDesktop from "./ScriptList/ScriptSidebarOnDesktop/ScriptSidebarOnDesktop";
import ScriptSidebarOnMobile from "./ScriptList/ScriptSidebarOnMobile/ScriptSidebarOnMobile";
import ScriptNav from "./ScriptNav/ScriptNav";

interface IProps {
  children: React.ReactNode;
}

const ScriptLayout = ({ children }: IProps) => {
  return (
    <main className="flex bg-[#f6f8fc]  relative ">
      <ScriptSidebarOnDesktop />

      <div className="flex-1">
        <ScriptNav color="inherit" position="static" />
        <ScriptSidebarOnMobile />
        <div className="px-5 pt-3 flex-1  lg:px-0 max-w-screen-2xl flex lg:gap-7">
          {children}
        </div>
      </div>
    </main>
  );
};

export default ScriptLayout;
