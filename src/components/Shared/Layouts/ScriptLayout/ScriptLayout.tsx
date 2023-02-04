import ScriptSidebarOnDesktop from "./ScriptList/ScriptSidebarOnDesktop/ScriptSidebarOnDesktop";
import ScriptNav from "./ScriptNav/ScriptNav";

interface IProps {
  children: React.ReactNode;
}

const ScriptLayout = ({ children }: IProps) => {
  return (
    <main className="flex min-h-[130vh] w-full bg-tinted-50/50">
      <ScriptSidebarOnDesktop />
      <div className="flex-1">
        <ScriptNav color="inherit" position="static" />
        {children}
      </div>
    </main>
  );
};

export default ScriptLayout;
