import { create, type StateCreator } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export interface PlayList {
  bv: string
  start: number
  end: number
}

interface PlayListState {
  playlist: PlayList[]
  add: (bv: string, start: number, end: number) => void
  remove: (bv: string) => void
}

export const usePlaylist = create<PlayListState>()(persist(
  (set) => ({
    playlist: [],
    add: (bv, start, end) => {
      if (!bv) {
        return
      }
      set((state) => {
        // 判断是否已经存在
        if (state.playlist.map(i => i.bv).includes(bv)) {
          return state
        }
        return {
          playlist: [...state.playlist, { bv, start, end }]
        }
      })
    },
    remove: (bv) => {
      if (!bv) {
        return
      }
      set((state) => ({
        playlist: state.playlist.filter(i => i.bv !== bv)
      }))
    },
  }),
  {
    name: 'playlist',
    storage: createJSONStorage(() => localStorage)
  }
))
