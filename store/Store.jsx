import { create } from "zustand";

const useStore = create((set) => ({
  section: 0,
  setSection: (number) => set({ section: number }),
}));
export default useStore;
