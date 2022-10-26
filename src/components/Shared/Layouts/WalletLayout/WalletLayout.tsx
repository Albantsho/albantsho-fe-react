import ProfileNav from "../../ProfileNav/ProfileNav";
import WalletCard from "./WalletCard/WalletCard";

interface IProps {
  children: React.ReactNode;
}

const WalletLayout = ({ children }: IProps) => {
  return (
    <main className="bg-[#f6f8fc] min-h-screen">
      <ProfileNav color="inherit" position="static" />
      <div className="flex py-5 md:py-10 flex-col md:flex-row px-5 sm:px-10 gap-y-5 gap-x-6 lg:gap-x-12 max-w-screen-2xl">
        <WalletCard />
        <div className="md:flex-1 flex shadow-primary rounded-lg">
          {children}
        </div>
      </div>
    </main>
  );
};

export default WalletLayout;
