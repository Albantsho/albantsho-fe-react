import { Pagination } from "@mui/material";

const PaginationMarketList = () => {
  return (
    <div className=" flex justify-center px-5 sm:px-10   mb-6 sm:mb-14 m-3 sm:mt-7 ">
      <Pagination
        defaultPage={1}
        siblingCount={0}
        sx={{
          "& .MuiPaginationItem-root.Mui-selected": {
            backgroundColor: "#fff !important",
            border: "1px solid #7953B5",
            borderRadius: "100%",
            color: "#7953B5",
          },
        }}
        className="bg-white shadow-md w-auto rounded-md p-4 md:px-10"
        count={10}
        size="large"
      />
    </div>
  );
};

export default PaginationMarketList;
