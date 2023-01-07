import MarketplaceLayout from "@shared/Layouts/MarketplaceLayout/MarketplaceLayout";
import MarketplaceProducts from "components/Marketplace/Index/MarketplaceProducts/MarketplaceProducts";
import MarketplaceTabs from "components/Marketplace/Index/MarketplaceTabs/MarketplaceTabs";
import CustomPaginationComponent from "@shared/CustomPaginationComponent/CustomPaginationComponent";
import Head from "next/head";
import { DotLoader } from "react-spinners";
import { NextPageWithLayout } from "../_app";
import useMarketPlace from "./useMarketPlace";

const Marketplace: NextPageWithLayout = () => {
  const {
    loading,
    scripts,
    currentPage,
    handleActivePage,
    pageCount,
    activeTab,
    pushActiveRoute,
  } = useMarketPlace();

  return (
    <>
      <Head>
        <title>Albantsho || Marketplace</title>
      </Head>
      <div className="min-h-screen">
        {loading && scripts.length === 0 ? (
          <DotLoader color="#7953B5" className="mx-auto mt-10" />
        ) : (
          <>
            <MarketplaceTabs
              activeTab={activeTab}
              pushToActiveRoute={pushActiveRoute}
            />
            <MarketplaceProducts scripts={scripts} />
            {pageCount > 1 && (
              <CustomPaginationComponent
                currentPage={currentPage}
                pageCount={pageCount}
                handleActivePage={handleActivePage}
              />
            )}
          </>
        )}
      </div>
    </>
  );
};

Marketplace.getLayout = (page) => (
  <MarketplaceLayout
    description={`"To make a great film you need three
things: the script, the script and the script.
- Alfred Hitchcock`}
  >
    {page}
  </MarketplaceLayout>
);

export default Marketplace;
