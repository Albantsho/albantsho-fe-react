import GreenArrow from "@assets/icons/green-arrow.svg";
import NextIcon from "@assets/icons/next-btn.svg";
import PrevIcon from "@assets/icons/prev-btn.svg";
import { Box, IconButton, SvgIcon, Typography } from "@mui/material";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialsIcon from "./assets/testimony.svg";

const testimonies = [
  {
    author: "Don Ekama, Nigerian",
    testimony: `Albantsho provided a platform that made it easier for me just
  to write my screenplay, upload it onto the platform and then
  have producers read through it and make bidding offers. I've
  been able to sell my screenplay and it's been a really
  wonderful experience.`,
  },
  {
    author: "Joan Rispa, Kenyan",
    testimony: `I would particularly recommend Albantsho to any writer or any
  producer, if you're a writer, and you really want to harness
  your skill, Albantsho is a platform for you. And if you're a
  producer in the market for some new perspectives, Albantsho is
  definitely the platform for you.`,
  },
  {
    author: "Francis Nganje, Cameroonian",
    testimony: `I was one of the lucky participants whose script was auctioned
  on the platform. It gave me a new motivation; it gave me a new
  sense of belonging in the filmmaking landscape in Africa.`,
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="mt-20 md:mt-0 px-5 sm:px-10 max-w-screen-2xl mx-auto"
      data-aos="flip-left"
      data-aos-delay="100"
      data-aos-duration="1000"
    >
      <div className="flex items-center gap-x-3 md:gap6 justify-center flex-wrap text-center">
        <TestimonialsIcon width="80" />
        <Typography
          variant="h4"
          color="primary.main"
          className="grotesk leading-none"
        >
          <span className="md:hidden">Testimonials about us</span>
          <span className="hidden md:inline">What our users are saying</span>
        </Typography>
      </div>
      <div className="flex">
        <div className="hidden md:flex justify-center self-end flex-1">
          <SvgIcon
            inheritViewBox
            component={GreenArrow}
            sx={{ fontSize: "min(7vw, 70px)" }}
          />
        </div>
        <Box
          className="py-12 mt-12 px-6 md:px-12 max-w-screen-sm mx-auto grid grow-[2]"
          sx={{
            backgroundImage:
              "linear-gradient(101.41deg, #F9F1FD 1.57%, #F0E2F9 100%)",
            borderRadius: 5,
          }}
        >
          <Swiper
            className="w-full max-w-full max-h-screen min-h-0 min-w-0"
            spaceBetween={50}
            modules={[Pagination, Navigation]}
            pagination={{
              clickable: true,
              el: ".testimonials-swiper__pagination",
              bulletActiveClass: "!w-3 !h-3",
              bulletClass:
                "w-2 h-2 rounded-full inline-block bg-white border border-primary-700 transition-all cursor-pointer",
              renderBullet(_index, className) {
                return `<span class="${className}"></span>`;
              },
            }}
            navigation={{
              prevEl: ".testimonials-swiper__prev-btn",
              nextEl: ".testimonials-swiper__next-btn",
              disabledClass: "Mui-disabled",
            }}
          >
            {testimonies.map(({ testimony, author }, i) => (
              <SwiperSlide key={i} className="grid">
                <Typography color="neutral.400">{testimony}</Typography>
                <div className="mt-6 sm:mt-8">
                  <Typography
                    variant="h6"
                    color="primary.main"
                    className="leading-none"
                    component="p"
                  >
                    {author}
                  </Typography>
                  <Typography variant="body2" color="neutral.600">
                    Script writer
                  </Typography>
                </div>
              </SwiperSlide>
            ))}
            <div className="hidden sm:flex gap-6 justify-center absolute right-0 bottom-0 z-50">
              <IconButton
                className="testimonials-swiper__prev-btn"
                color="inherit"
                sx={{ "&.Mui-disabled": { opacity: 0.4 } }}
              >
                <SvgIcon
                  inheritViewBox
                  component={PrevIcon}
                  sx={{ fontSize: 40 }}
                />
              </IconButton>
              <IconButton
                className="testimonials-swiper__next-btn"
                color="inherit"
                sx={{ "&.Mui-disabled": { opacity: 0.4 } }}
              >
                <SvgIcon
                  inheritViewBox
                  component={NextIcon}
                  sx={{ fontSize: 40 }}
                />
              </IconButton>
            </div>
          </Swiper>
          <div className="testimonials-swiper__pagination flex gap-4 justify-center mt-8 min-h-[15px]" />
        </Box>
        <div className="flex-1" />
      </div>
    </section>
  );
};

export default Testimonials;
