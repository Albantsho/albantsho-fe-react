import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";

interface IProps {
  post: {
    image: string;
    title: string;
    desc: string;
  };
}

const BlogCard = ({ post }: IProps) => {
  return (
    <Card>
      <CardMedia loading="lazy" component="img" src={post.image} />
      <CardHeader title={post.title} />
      <CardContent>
        <Typography color="gray.400">{post.desc}</Typography>
      </CardContent>
      <CardActions>
        <Link>Read more</Link>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
