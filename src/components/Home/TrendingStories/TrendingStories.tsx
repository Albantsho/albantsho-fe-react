import { Box, Card, Skeleton, Typography } from "@mui/material";
import ScriptCard from "@shared/ScriptCard/ScriptCard";
import useScriptsApi from "apis/Scripts.api";
import { useQuery } from "react-query";

const TrendingStories = () => {
  const { getAllScripts } = useScriptsApi();

  const { data: trendingScriptsData, isLoading: loadingGetTrendingScripts } =
    useQuery("script_trending", () => getAllScripts("trending=true"));
console.log(    trendingScriptsData);

  return (
    <section
      id="trending-stories"
      className="px-5 sm:px-10 max-w-screen-xl mx-auto mt-12 md:mt-28 mb-12 md:mb-32"
      data-aos="fade-up"
    >
      <Typography
        variant="h4"
        className="grotesk text-center mb-4 md:mb-8 leading-normal"
        color="primary.main"
      >
        Albantsho Story Base
      </Typography>
      {/* <div className="flex justify-center relative rounded-3xl overflow-hidden">
        <Image src={TrendingStoriesPreview} alt="Story base preview" />
        <div className="absolute inset-0 bg-black/80 grid place-content-center text-center">
          <Typography
            variant="display"
            color="secondary"
            className="leading-none"
          >
            Coming Soon
          </Typography>
        </div>
      </div> */}
      <Box className="grid gap-3 md:gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {!loadingGetTrendingScripts && trendingScriptsData
          ? trendingScriptsData.scripts
              .slice(0, 6)
              .map((script) => (
                <ScriptCard
                  data-aos="fade-up"
                  key={script._id}
                  script={script}
                />
              ))
          : Array.from(new Array(6)).map((_, i) => (
              <Card
                key={i}
                className="rounded-lg"
                sx={{ boxShadow: " 0px 2px 7px rgba(117, 88, 162, 0.15)" }}
              >
                <Skeleton
                  sx={{ height: 300 }}
                  animation="wave"
                  variant="rectangular"
                />
                <div className="flex justify-between items-center">
                  <Skeleton
                    className="mx-5"
                    animation="wave"
                    height={60}
                    width="20%"
                    style={{ marginBottom: 6, marginTop: 6 }}
                  />
                  <Skeleton
                    className="mx-5"
                    variant="circular"
                    width={30}
                    height={30}
                    style={{ marginBottom: 6, marginTop: 6 }}
                  />
                </div>
                <Skeleton
                  className="mx-5"
                  animation="wave"
                  height={20}
                  width="50%"
                  style={{ marginBottom: 6, marginTop: 6 }}
                />
                <Skeleton className="mx-5" animation="wave" height={15} />
                <Skeleton className="mx-5" animation="wave" height={15} />
                <Skeleton className="mx-5" animation="wave" height={15} />
                <Skeleton className="mx-5 mb-5" animation="wave" height={15} />
                <Skeleton
                  className="mx-5"
                  animation="wave"
                  height={60}
                  width="30%"
                  style={{ marginBottom: 5, marginTop: 5 }}
                />
                <div className="flex justify-between">
                  <Skeleton
                    className="mx-5"
                    animation="wave"
                    height={60}
                    width="20%"
                    style={{ marginBottom: 4, marginTop: 4 }}
                  />
                  <Skeleton
                    className="mx-5"
                    animation="wave"
                    height={60}
                    width="20%"
                    style={{ marginBottom: 4, marginTop: 4 }}
                  />
                </div>
              </Card>
            ))}
      </Box>
    </section>
  );
};

export default TrendingStories;
