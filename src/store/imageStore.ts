import { create } from "zustand";

type ImageFile = string;

interface ImageStore {
  images: string[];
  clearImages: () => void;
  setImages: (images: ImageFile[]) => void;
}

export const useImageStore = create<ImageStore>((set, get) => ({
  images: [],
  setImages: (images: ImageFile[]) => {
    set({ images });
  },
  clearImages: () => {
    set({ images: [] });
    console.log("All images cleared from store");
  },
}));
