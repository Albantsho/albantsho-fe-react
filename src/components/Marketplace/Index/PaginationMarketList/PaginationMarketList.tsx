import { Pagination, useMediaQuery, useTheme } from "@mui/material";

const PaginationMarketList = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div className=" flex justify-center px-5 sm:px-10   mb-6 sm:mb-14 m-3 sm:mt-7 ">
      <Pagination
        defaultPage={1}
        siblingCount={matches ? 2 : 0}
        boundaryCount={matches ? 2 : 1}
        sx={{
          "& .MuiPaginationItem-root.Mui-selected": {
            backgroundColor: "#fff !important",
            border: "1px solid #7953B5",
            borderRadius: "100%",
            color: "#7953B5",
          },
        }}
        className="bg-white shadow-md w-auto rounded-md p-4 md:px-10"
        count={8}
        size={matches ? "large" : "medium"}
      />
    </div>
  );
};

export default PaginationMarketList;
