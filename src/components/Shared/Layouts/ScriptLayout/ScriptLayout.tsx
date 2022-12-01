import ScriptSidebarOnDesktop from "./ScriptList/ScriptSidebarOnDesktop/ScriptSidebarOnDesktop";
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
        {children}
      </div>
    </main>
  );
};

export default ScriptLayout;
