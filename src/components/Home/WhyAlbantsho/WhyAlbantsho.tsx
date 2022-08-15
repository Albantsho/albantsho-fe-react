import NextIcon from "@assets/icons/next-btn.svg";
import PrevIcon from "@assets/icons/prev-btn.svg";
import { Box, Icon, IconButton, Typography } from "@mui/material";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import FindIcon from "./assets/find.svg";
import FocusIcon from "./assets/focus.svg";
import PatternBg from "./assets/pattern-bg.png";
import WriterIcon from "./assets/writer.svg";

const features = [
  {
    icon: <WriterIcon />,
    title: "Write Better on iDraft",
    desc: "Our FREE, industry standard, and intuitive screenwriting tool put your story and creative process first and above all else. Now you can write scripts that pop off the page, achieve better story structure and collaborate easily.",
  },
  {
    icon: <FindIcon />,
    title: "Find the right Story",
    desc: "Accredited producers explore our growing story-base for well-curated and written screenplays by authentic creative voices. Find the right story with just a few keywords.",
  },
  {
    icon: <FocusIcon />,
    title: "Focus on your story",
    desc: "Albantsho does the heavy lifting, connecting you with an ecosystem of Producers, and Script-OGs, so you can focus on what truly matters: the story.",
  },
  {
    icon: <WriterIcon />,
    title: "Secure your IP",
    desc: "Screenwriting is art, and intellectual property rights are of the utmost. We ensure that you are protected through every step, following global practices on IP protection.",
  },
  {
    icon: <FindIcon />,
    title: "Take charge of the narrative",
    desc: "With our Smart contracts and bidding system, an  way to find, preview, and acquire great screenplays is ensured at your fingertips.",
  },
];

const WhyAlbantsho = () => {
  return (
    <section id="why-albantsho" className="py-24 px-5 sm:px-10">
      <div className="max-w-screen-2xl mx-auto">
        <Typography
          variant="h4"
          fontFamily="Space Grotesk"
          color="primary.main"
          className="text-center"
          gutterBottom
        >
          Why Albantsho?
        </Typography>
        <Box
          className="shadow-primary-500 pt-20 pb-10 px-16 rounded-[20px] bg-cover bg-center bg-blend-soft-light"
          sx={{
            backgroundImage: `linear-gradient(133.77deg, #A97BF5 0%, #754CB5 80.03%), url('${PatternBg.src}')`,
            border: "5px solid #FFFFFF",
            boxShadow: "0px 5px 40px 15px rgba(169, 123, 245, 0.3)",
          }}
        >
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".why-albantsho__prev-btn",
              nextEl: ".why-albantsho__next-btn",
              disabledClass: "Mui-disabled",
            }}
            spaceBetween={128}
            breakpoints={{
              1024: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
          >
            {features.map(({ desc, icon, title }, i) => (
              <SwiperSlide
                key={i}
                className="text-white overflow-visible !h-auto"
              >
                <Box
                  className="px-1"
                  sx={{
                    "&::after": {
                      content: `""`,
                      borderRadius: "50%",
                      width: 2,
                      position: "absolute",
                      right: -63,
                      top: 0,
                      bottom: 0,
                      backgroundImage:
                        "linear-gradient(180deg, #895ECE 0%, #FFFFFF 50.87%, #895ECE 100%)",
                    },
                  }}
                >
                  <Icon className="mb-6" sx={{ width: 72, height: 72 }}>
                    {icon}
                  </Icon>
                  <Typography
                    variant="h5"
                    fontWeight={500}
                    fontFamily="Space Grotesk"
                  >
                    {title}
                  </Typography>
                  <Typography>{desc}</Typography>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex gap-6 text-white justify-center mt-10">
            <IconButton
              className="why-albantsho__prev-btn"
              color="inherit"
              sx={{ "&.Mui-disabled": { opacity: 0.2 } }}
            >
              <PrevIcon width="61" height="61" />
            </IconButton>
            <IconButton
              className="why-albantsho__next-btn"
              color="inherit"
              sx={{ "&.Mui-disabled": { opacity: 0.2 } }}
            >
              <NextIcon width="61" height="61" />
            </IconButton>
          </div>
        </Box>
      </div>
    </section>
  );
};

export default WhyAlbantsho;
