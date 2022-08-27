import { Box, Tab, Tabs } from "@mui/material";

const TabsMarketPlace = () => {
  return (
    <Box className="pt-12  w-full ">
      <Tabs
        sx={{ borderBottom: 1, borderTop: 1, borderColor: "#D9D9D9" }}
        variant="scrollable"
        allowScrollButtonsMobile
        indicatorColor="secondary"
        className="lg:px-32"
      >
        <Tab className="futura text-neutral-300 text-2xl" label="Explore" />
        <Tab className="futura text-neutral-300 text-2xl" label="Top Rated" />
        <Tab className="futura text-neutral-300 text-2xl" label="Featured" />
        <Tab className="futura text-neutral-300 text-2xl" label="Trending" />
      </Tabs>
    </Box>
  );
};

export default TabsMarketPlace;
