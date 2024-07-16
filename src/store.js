import {create} from 'zustand';

const useStore = create((set) => ({
  isLogin: false,
  loginComplete: () => set((state) => ({isLogin: !state.isLogin }))
}))

export default useStore;