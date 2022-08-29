import { Pagination } from "@mui/material";

const PaginationMarketList = () => {
  return (
    <div className="max-w-xl mx-auto p-4 sm:px-6 bg-white rounded-md shadow-md mb-6 sm:mb-14 m-3 sm:mt-7">
      <Pagination
        sx={{
          "& .Mui-selected": {
            backgroundColor: "white",
            border: "1px solid #7953B5",
            borderRadius: "100%",
            color: "#7953B5",
          },
          "& :hover": { backgroundColor: "white" },
          span: {
            "&.MuiTouchRipple-root": {
              backgroundColor: "white",
              zIndex: "-10",
            },
          },
        }}
        className=""
        count={10}
        size="large"
      />
    </div>
  );
};

export default PaginationMarketList;
