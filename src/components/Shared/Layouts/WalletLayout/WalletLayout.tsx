import React from "react";
import DashboardNav from "../DashboardLayout/Nav/DashboardNav";
import WalletCart from "./WalletCard/WalletCard";

interface IProps {
  children: React.ReactNode;
}

const WalletLayout = ({ children }: IProps) => {
  return (
    <main className="bg-[#f5f5f5]">
      <DashboardNav color="inherit" position="static" />
      <div className="flex py-5 flex-col md:flex-row px-5 sm:px-10 gap-y-5 gap-x-6 lg:gap-x-12 max-w-screen-xl">
        <WalletCart />
        <div className="md:flex-1 flex shadow-sm">{children}</div>
      </div>
    </main>
  );
};

export default WalletLayout;
