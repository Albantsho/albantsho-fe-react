import AccordionScripts from "./AccordionScripts/AccordionScripts";

const listAccordions = [
  {
    id: 1,
    title: "The Long man of Long Beach",
    storyAbout: "Story about a man who lived on long beach",
    type: "Tv Pilot",
  },
  {
    id: 2,
    title: "The Apple and The Berry",
    storyAbout:
      "Dive into the world of two freinds on opposite ends of the spectrum",
    type: "Feature Film",
  },
  {
    id: 3,
    title: "The Walk of fame",
    storyAbout:
      "The glits and the glam don’t mean as much when Claire climbs up the ladder",
    type: "Documentary",
  },
  {
    id: 4,
    title: "Honeycumb",
    storyAbout:
      "Young man shakes the hornets and finds something extraoridnary",
    type: "Feature Film",
  },
];

const AccordionProjectsList = () => {
  return (
    <div className="mt-4 md:mt-6 pb-16">
      {listAccordions.map((accordion) => {
        return (
          <AccordionScripts
            key={accordion.id}
            title={accordion.title}
            storyAbout={accordion.storyAbout}
            type={accordion.type}
          />
        );
      })}
    </div>
  );
};

export default AccordionProjectsList;
