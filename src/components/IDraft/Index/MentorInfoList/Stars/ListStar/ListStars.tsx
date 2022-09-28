import Star from "../Star/Star";

const ListStars = () => {
  return (
    <>
      <div className="absolute top-[11%] xl:top-[20%] left-[5px] lg:-left-[100px]  hidden md:block ">
        <Star />
      </div>

      <div className="absolute top-[23%] xl:top-[30%] right-4 lg:-right-8 hidden md:block ">
        <Star isSmall="isSmall" />
      </div>

      <div className="absolute bottom-[30%]  xl:bottom-[20%] right-4 lg:-right-[100px] hidden md:block ">
        <Star />
      </div>

      <div className="absolute bottom-[42%] xl:bottom-[30%] left-[8px] lg:-left-8 hidden md:block ">
        <Star isSmall="isSmall" />
      </div>
    </>
  );
};

export default ListStars;
