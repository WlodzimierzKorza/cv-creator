import { create } from "zustand";

export const useStore = create((set) => ({
  updateState: (data) => set((state) => ({ ...state, data })),
  updateJobs: (data) => set((state) => ({ ...state, jobs: data })),
}));
