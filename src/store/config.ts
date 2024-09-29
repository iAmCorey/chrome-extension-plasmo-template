import { create } from "zustand";

interface Config {
  hosting: boolean
  setHosting: (hosting: boolean) => void
}

export const useConfig = create<Config>()((set) => ({
  hosting: true,
  setHosting: (hosting) => set({ hosting }),
}))
