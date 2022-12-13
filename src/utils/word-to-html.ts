import mammoth from "mammoth";

export const wordToHtml = async (arrayBuffer: ArrayBuffer) => {
  const result = await mammoth.convertToHtml({ arrayBuffer });

  return result.value;
};
