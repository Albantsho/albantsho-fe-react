import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import { IWeblog } from "interfaces/weblog";
import Link from "next/link";
import routes from "routes/routes";

interface IProps {
  post: IWeblog;
}
// interface IProps {
//   post: {
//     image: string;
//     title: string;
//     desc: string;
//   };
// }

const BlogCard = ({ post }: IProps) => {
  return (
    <Card
      className="rounded-lg"
      sx={{ boxShadow: " 0px 2px 7px rgba(117, 88, 162, 0.15)" }}
    >
      <CardMedia
        loading="lazy"
        component="img"
        src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${post.media}`}
      />
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
        <Typography color="gray.400">{post.description}</Typography>
      </CardContent>
      <CardActions className="px-4 pb-4">
        <Link
          href={routes.oneBlog(post._id)}
          className="underline text-primary-700"
        >
          Read more
        </Link>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
