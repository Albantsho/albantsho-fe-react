import CustomPaginationComponent from "@shared/CustomPaginationComponent/CustomPaginationComponent";
import Loader from "@shared/Loader/Loader";
import MarketplaceProducts from "./MarketplaceProducts/MarketplaceProducts";
import MarketplaceTabs from "./MarketplaceTabs/MarketplaceTabs";
import useMarketplace from "./useMarketplace";
import emptyScripts from "@assets/images/empty-blogs.png";
import Image from "next/image";

const ScriptList = () => {
  const {
    currentPage,
    handleActivePage,
    activeTab,
    pushActiveRoute,
    loadingGetScripts,
    scriptsData,
  } = useMarketplace();

  return (
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
  );
};

export default ScriptList;
