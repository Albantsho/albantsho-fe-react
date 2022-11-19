import create from "zustand";

type ImageSize = {
  width: string;
  height: string;
};

interface IImageState {
  imageSize: ImageSize;
  imagePosition: number;
  setImageSize: (imageSize: ImageSize) => void;
  setImagePosition: (imagePosition: number) => void;
}

const useImageStore = create<IImageState>()((set) => ({
  imageSize: {
    width: "195",
    height: "195",
  },
  imagePosition: 0,
  setImageSize: (imageSize: ImageSize) =>
    set((state) => ({ ...state, imageSize })),
  setImagePosition: (imagePosition: number) =>
    set((state) => ({ ...state, imagePosition })),
}));

export default useImageStore;
