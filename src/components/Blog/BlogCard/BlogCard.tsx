import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import Link from "next/link";
import routes from "routes/routes";

interface IProps {
  post: {
    image: string;
    title: string;
    desc: string;
  };
}

const BlogCard = ({ post }: IProps) => {
  return (
    <Card
      className="rounded-lg"
      sx={{ boxShadow: " 0px 2px 7px rgba(117, 88, 162, 0.15)" }}
    >
      <CardMedia loading="lazy" component="img" src={post.image} />
      <CardHeader
        className="pb-0"
        title={post.title}
        titleTypographyProps={{
          color: "primary.main",
          variant: "h4",
          className: "leading-normal futura font-medium",
        }}
      />
      <CardContent className="pt-0">
        <Typography color="gray.400">{post.desc}</Typography>
      </CardContent>
      <CardActions className="px-4 pb-4">
        <Link href={`${routes.blog}/test`} passHref>
          <MuiLink>Read more</MuiLink>
        </Link>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
