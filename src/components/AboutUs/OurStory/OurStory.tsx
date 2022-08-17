import { Typography } from "@mui/material";

const OurStory = () => {
  return (
    <section id="our-story" className="mt-12 sm:mt-24">
      <Typography
        variant="h3"
        color="primary.main"
        className="futura leading-normal font-medium"
        gutterBottom
      >
        Our Story
      </Typography>
      <Typography paragraph>
        Albantsho comes to life as a blend of two words: ‘Albasa’, the Hausa
        word for onion, and the Setswana word for black, ‘Ntsho’. This
        translates to Black Onion which speaks loudly of our vision to leverage
        technologically to unfold the many layers of African stories left
        untapped.
      </Typography>
      <Typography paragraph>
        As screenwriters and filmmakers themselves, Julie Ako and Nikita
        Mokgware from Nigeria and Botswana respectively, founded Albantsho in
        2020 after they realised that a long-term career in film was in fact a
        difficult journey you had to craft yourself with little or no support
        structures.
      </Typography>
      <Typography paragraph>
        And so our big question became “how do we make this easier and more
        rewarding for the thousands of screenwriters and film creatives across
        Africa?”
      </Typography>
      <Typography paragraph>
        Our goal is to showcase the potential of African storytelling, foster
        authentic content representative of a burgeoning Africa, and empower the
        creatives right at the heart of it. For us, every great film starts with
        a script, and building an ecosystem of products that take scripts from
        the page to the screen while stimulating a new wave of authentic African
        films is why we do this. This is Albantsho.
      </Typography>
    </section>
  );
};

export default OurStory;
