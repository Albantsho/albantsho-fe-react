import { Typography } from "@mui/material";
import Footer from "@shared/Footer/Footer";
import Nav from "@shared/Layouts/GeneralLayout/Nav/Nav";
import Head from "next/head";
import Image from "next/image";

const BlogPost = () => {
  return (
    <>
      <Head>
        {/* TODO: Change the title later */}
        <title>Albantsho || Blog Post</title>
      </Head>
      <Nav color="inherit" position="static" />
      <Image
        src={"https://picsum.photos/1920/1080"}
        alt=""
        width="1920"
        height="500"
        className="object-cover object-center"
      />
      <div className="py-6 md:py-14 max-w-screen-lg mx-auto px-5 sm:px-10">
        <Typography
          variant="h3"
          className="leading-normal mb-2 md:mb-14 md:text-center"
          color="primary.main"
        >
          Lorem ipsum dolor sit amet 
        </Typography>
        <Typography paragraph>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
          provident ipsa quam dolorem nam vel non vero fugiat molestiae,
          reiciendis iste placeat excepturi aliquam quisquam itaque at inventore
          maxime alias incidunt assumenda? Temporibus aspernatur quis eveniet
          consequuntur vel. Neque repudiandae distinctio officiis porro in fugit
          numquam corrupti est eveniet iste?
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          nobis deleniti, itaque consectetur magni velit eius, autem, mollitia
          iure veritatis laudantium in? Incidunt consequuntur veniam quam
          sapiente reiciendis? Delectus, placeat.
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          eos tempore et incidunt sequi perferendis dolores harum expedita id
          corporis nihil soluta minima amet, repellendus voluptatum odio! Nobis,
          illum officiis et maiores, amet facilis, neque laudantium temporibus
          dolor odio minus. Explicabo dolores ab quaerat aspernatur consequuntur
          recusandae, exercitationem doloribus magnam amet praesentium nemo
          ratione quia illo debitis ad quis ullam perspiciatis repellendus
          similique officiis iste.
        </Typography>
        <Typography paragraph>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
          provident ipsa quam dolorem nam vel non vero fugiat molestiae,
          reiciendis iste placeat excepturi aliquam quisquam itaque at inventore
          maxime alias incidunt assumenda? Temporibus aspernatur quis eveniet
          consequuntur vel. Neque repudiandae distinctio officiis porro in fugit
          numquam corrupti est eveniet iste?
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          nobis deleniti, itaque consectetur magni velit eius, autem, mollitia
          iure veritatis laudantium in? Incidunt consequuntur veniam quam
          sapiente reiciendis? Delectus, placeat.
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          eos tempore et incidunt sequi perferendis dolores harum expedita id
          corporis nihil soluta minima amet, repellendus voluptatum odio! Nobis,
          illum officiis et maiores, amet facilis, neque laudantium temporibus
          dolor odio minus. Explicabo dolores ab quaerat aspernatur consequuntur
          recusandae, exercitationem doloribus magnam amet praesentium nemo
          ratione quia illo debitis ad quis ullam perspiciatis repellendus
          similique officiis iste.
        </Typography>
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;
