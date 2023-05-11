//* This function is used to convert a given string to a slug format, which can be used 
//* to create more SEO-friendly URLs for blog posts.

export const convertToSlug = (Text: string) => {
  //* Converts all characters in the string to lowercase.
  //* This is done to maintain consistency and prevent issues related to capital letters.
  return Text.toLowerCase()
    //* Replaces all occurrences of spaces " " with hyphens "-" using a regular expression.
    .replace(/ /g, "-")
    //* Removes any non-alphanumeric characters except for hyphen "-", again using a regular expression.
    .replace(/[^\w-]+/g, "");
};