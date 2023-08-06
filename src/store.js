import { create } from "zustand";

export const useStore = create((set) => ({
  data: {},
  jobs: [],
  education: [],
  skills: [],
  updateState: (data) => set((state) => ({ ...state, data })),
  updateJobs: (data) => set((state) => ({ ...state, jobs: data })),
  updateEducation: (data) => set((state) => ({ ...state, education: data })),
  updateSkills: (data) => set((state) => ({ ...state, skills: data })),
}));
