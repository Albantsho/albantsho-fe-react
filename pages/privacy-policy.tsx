import { Typography } from "@mui/material";
import HeroSection from "@shared/HeroSection/HeroSection";
import Layout from "@shared/Layouts/Layout";
import StarArrowBg from "@shared/StarArrowBg/StarArrowBg";
import Head from "next/head";
import { NextPageWithLayout } from "./_app";

const PrivacyPolicy: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Privacy Policy</title>
      </Head>
      <HeroSection title="Privacy Policy" />
      <div className="max-w-screen-lg px-5 sm:px-10 mx-auto py-14 relative">
        <StarArrowBg />
        <Typography paragraph>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          dolorem, corporis laboriosam voluptatibus unde quia eveniet eaque
          tenetur sapiente voluptatem natus, ratione et! Sint pariatur quae, ab
          facilis molestias et officiis mollitia praesentium architecto, velit
          officia rem. Earum molestias assumenda vitae sit, harum consectetur ut
          nihil dicta maxime quasi vel.
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          animi eveniet ullam deleniti eius id esse voluptas? Similique, id
          quasi!
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque,
          quas. Natus maxime, debitis assumenda veniam nulla libero repellat
          dolorum voluptate officia suscipit! Autem repellat cum nemo
          consequatur, doloribus hic quibusdam ratione dicta sit asperiores
          quisquam voluptatibus! Cum quidem debitis obcaecati corporis quia hic
          illo odio! Soluta, necessitatibus officia voluptatum molestias est
          laborum aut accusantium eos quo ex, alias voluptates eaque similique
          nobis eveniet vero accusamus ipsam! Perspiciatis, fugiat consequuntur.
          Modi officia exercitationem beatae accusantium? Ea eius possimus
          ratione amet neque consectetur! Velit, consequuntur. Iste a nihil sint
          eum necessitatibus inventore beatae modi. Necessitatibus nihil
          incidunt quidem aut eius nisi facere.
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, iste
          voluptatum reiciendis, voluptas velit, maiores sint sequi ipsa cum
          quod vel impedit. Iusto suscipit eos similique a possimus atque
          assumenda, perferendis distinctio accusamus et, labore odio nesciunt
          nobis velit totam optio repellendus illo tempore provident pariatur
          ullam. Ad fugit repellat nemo maxime doloremque laborum recusandae,
          aliquid sed deleniti, asperiores soluta aliquam voluptatum laboriosam
          optio accusamus ut dicta veritatis laudantium. Qui, magni? Impedit
          quos quas molestiae eaque dolor iusto architecto nemo.
        </Typography>
      </div>
    </>
  );
};

PrivacyPolicy.getLayout = (page) => <Layout>{page}</Layout>;

export default PrivacyPolicy;
