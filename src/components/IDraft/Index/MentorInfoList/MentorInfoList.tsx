import MentorInfo from "./MentorInfo/MentorInfo";
import drSam from "./assets/dr-sam.jpg";
import femi from "./assets/femi.jpg";
import funmi from "./assets/funmi.jpg";
import lauren from "./assets/lauren.jpg";
import yinka from "./assets/yinka.jpg";
import more from "./assets/more.png";
import mentors from "./assets/mentors.png";
import Image from "next/image";
import ListStars from "./Stars/ListStar/ListStars";

const mentorInfo = [
  {
    id: 1,
    image: drSam,
    name: "DR SAMANTHA-ISAAC IWOWO",
    description:
      "Dr. Iwowo is a Senior Lecturer at Bournemouth University, Director, Researcher, and Screen-writer with over 50 published screenplays, including the award-winning Oloibiri (2015), which premiered at the Cannes film festival.",
  },
  {
    id: 2,
    image: femi,
    name: "FEMI ODUGBEMI",
    description:
      "Femi Odugbemi is an award-winning documentary filmmaker, screenwriter, and a voting member of the Oscars’ Academy award. He is the founder and executive producer at Zuri24 media, renowned for excellent TV shows.",
  },
  {
    id: 3,
    image: yinka,
    name: "Lauren O'Connor",
    description:
      "Yinka Ogun is an award-winning screenwriter of the Netflix Original, Oloture, and creator of multiple award-winning TV shows.  He is the current president of the screenwriters’ guild of Nigeria.",
  },
  {
    id: 4,
    image: funmi,
    name: "YINKA OGUN",
    description:
      "Yinka Ogun is an award-winning screenwriter of the Netflix Original, Oloture, and creator of multiple award-winning TV shows.  He is the current president of the screenwriters’ guild of Nigeria.",
  },
  {
    id: 5,
    image: lauren,
    name: "FUNMI ODUSHOLA",
    description:
      "Funmi Odushola is a Market researcher, New producer developer, and route-to-market expert with a vast West African portfolio. In addition, she is a data collector that broadly impacts new market investments.",
  },
];

const MentorInfoList = () => {
  return (
    <div className="py-4 px-5 sm:px-10 xl:px-32 bg-primary-700">
      <div className="max-w-screen-xl mx-auto relative">
        <div data-aos="zoom-out-down" className="lg:my-24 my-12">
          <Image src={mentors} alt="mentors" />
        </div>
        <ListStars />
        <div className="flex flex-col p-8 md:py-12 xl:py-24 md:px-28 xl:px-48 bg-white rounded-2xl gap-8">
          {mentorInfo.map((mentor) => {
            return (
              <MentorInfo
                key={mentor.id}
                name={mentor.name}
                image={mentor.image}
                description={mentor.description}
              />
            );
          })}

          <div data-aos="zoom-out-up" className="my-10 md:my-14">
            <Image src={more} alt="more" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorInfoList;
