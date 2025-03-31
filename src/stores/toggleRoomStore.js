import { create } from "zustand";

export const useToggleRoomStore = create((set) => ({
  isDarkRoom: false,
  isTransitioning: false,
  isBeforeZooming: false,

  setDarkRoom: (value) =>
    set({
      isDarkRoom: value,
    }),

  setIsTransitioning: (value) =>
    set({
      isTransitioning: value,
    }),

  setIsBeforeZooming: (value) =>
    set({
      isBeforeZooming: value,
    }),
}));
