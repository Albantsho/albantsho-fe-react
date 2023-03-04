import emptyScripts from "@assets/images/empty-blogs.png";
import CustomPaginationComponent from "@shared/CustomPaginationComponent/CustomPaginationComponent";
import MarketplaceLayout from "@shared/Layouts/MarketplaceLayout/MarketplaceLayout";
import Loader from "@shared/Loader/Loader";
import MarketplaceProducts from "components/Marketplace/Index/MarketplaceProducts/MarketplaceProducts";
import MarketplaceTabs from "components/Marketplace/Index/MarketplaceTabs/MarketplaceTabs";
import Head from "next/head";
import Image from "next/image";
import { NextPageWithLayout } from "../_app";
import useMarketPlace from "./useMarketPlace";

const Marketplace: NextPageWithLayout = () => {
  const {
    currentPage,
    handleActivePage,
    activeTab,
    pushActiveRoute,
    loadingGetScripts,
    scriptsData,
  } = useMarketPlace();

  return (
    <>
      <Head>
        <title>Albantsho || Marketplace</title>
      </Head>
      <div className="min-h-[90vh]">
        <MarketplaceTabs
          activeTab={activeTab}
          pushToActiveRoute={pushActiveRoute}
        />
        {!loadingGetScripts && scriptsData ? (
          scriptsData.scripts.length ? (
            <>
              <MarketplaceProducts scripts={scriptsData.scripts} />
              {scriptsData.pagesCount > 1 && (
                <CustomPaginationComponent
                  currentPage={currentPage}
                  pageCount={scriptsData.pagesCount}
                  handleActivePage={handleActivePage}
                />
              )}
            </>
          ) : (
            <Image
              width={384}
              height={384}
              priority
              className="w-fit h-fit mx-auto mt-14 lg:mt-24"
              src={emptyScripts}
              alt="empty blog list"
            />
          )
        ) : (
          <Loader setCustomHeight="min-h-[90vh]" />
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
