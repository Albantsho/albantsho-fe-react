//* create slug from title for blog
export const convertToSlug = (Text: string) => {
  return Text.toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};
