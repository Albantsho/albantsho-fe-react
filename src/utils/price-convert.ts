import CryptoConvert from "crypto-convert";

export const priceConverter = async () => {
  const convert = new CryptoConvert();

  await convert.ready(); //Wait for the initial cache to load
  return convert;
};
