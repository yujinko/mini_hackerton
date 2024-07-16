import {create} from 'zustand'

const userData = localStorage.getItem("access")

const useStorageStore = create((set) => ({
  isUser: userData,
  logoutComplete: () => set((state) => ({isUser: undefined}))
}))

export default useStorageStore