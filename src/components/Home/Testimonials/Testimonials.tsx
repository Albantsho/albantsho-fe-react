import { Box, Icon, IconButton, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import TestimonialsIcon from "./assets/testimony.svg";
import NextIcon from "@assets/icons/next-btn.svg";
import PrevIcon from "@assets/icons/prev-btn.svg";

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
      className="mt-20 px-5 sm:px-10"
      data-aos="flip-up"
      data-aos-anchor-placement="center-bottom"
    >
      <div className="flex items-center gap-x-3 md:gap6 justify-center flex-wrap text-center">
        <Icon sx={{ fontSize: "min(20vw, 80px)" }}>
          <TestimonialsIcon />
        </Icon>
        <Typography
          variant="h4"
          color="primary.700"
          className="grotesk mt-2.5 leading-none"
        >
          <span className="md:hidden">Testimonials about us</span>
          <span className="hidden md:inline">What our users are saying</span>
        </Typography>
      </div>
      <Box
        className="py-12 mt-12 px-6 md:px-12 max-w-screen-sm mx-auto"
        sx={{
          backgroundImage:
            "linear-gradient(101.41deg, #F9F1FD 1.57%, #F0E2F9 100%)",
          borderRadius: 5,
        }}
      >
        <Swiper
          spaceBetween={50}
          modules={[Pagination, Navigation]}
          pagination={{
            clickable: true,
            el: ".testimonials-swiper__pagination",
            bulletActiveClass: "w-3 h-3",
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
            <SwiperSlide key={i}>
              <Typography color="neutral.400">{testimony}</Typography>
              <div className="mt-6 sm:mt-8">
                <Typography
                  variant="h6"
                  color="primary.700"
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
              <PrevIcon width="40" height="40" />
            </IconButton>
            <IconButton
              className="testimonials-swiper__next-btn"
              color="inherit"
              sx={{ "&.Mui-disabled": { opacity: 0.4 } }}
            >
              <NextIcon width="40" height="40" />
            </IconButton>
          </div>
        </Swiper>
        <div className="testimonials-swiper__pagination flex gap-4 justify-center mt-8" />
      </Box>
    </section>
  );
};

export default Testimonials;
