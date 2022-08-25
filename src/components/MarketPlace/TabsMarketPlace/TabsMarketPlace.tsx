import { Box, Tab, Tabs } from "@mui/material";

const TabsMarketPlace = () => {
  return (
    <Box
      sx={{ borderBottom: 1, borderColor: "purple.700" }}
      className="pt-12  w-full "
    >
      <Tabs
        variant="scrollable"
        allowScrollButtonsMobile
        indicatorColor="secondary"
        className="lg:px-32 "
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
