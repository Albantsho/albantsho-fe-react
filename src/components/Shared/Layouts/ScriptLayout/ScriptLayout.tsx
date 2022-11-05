import ScriptSidebarOnDesktop from "./ScriptList/ScriptSidebarOnDesktop/ScriptSidebarOnDesktop";
import ScriptSidebarOnMobile from "./ScriptList/ScriptSidebarOnMobile/ScriptSidebarOnMobile";
import ScriptNav from "./ScriptNav/ScriptNav";

interface IProps {
  children: React.ReactNode;
}

const ScriptLayout = ({ children }: IProps) => {
  return (
    <main className="flex bg-tinted-50/50">
      <ScriptSidebarOnDesktop />
      <div data-aos="fade-top" data-aos-duration="300" className="flex-1">
        <ScriptNav color="inherit" position="static" />
        <ScriptSidebarOnMobile />
        <div
          data-aos="fade-left"
          data-aos-duration="300"
          className="pt-3 lg:pt-5 flex-1 px-5 sm:px-10 max-w-screen-2xl"
        >
          {children}
        </div>
      </div>
    </main>
  );
};

export default ScriptLayout;
