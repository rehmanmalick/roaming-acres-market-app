import { create } from "zustand";

type UserType = "Buyer" | "Seller" | null;

interface UserStore {
  userType: UserType;
  setUserType: (type: UserType) => void;
  clearUserType: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  userType: null,
  setUserType: (type) => set({ userType: type }),
  clearUserType: () => set({ userType: null }),
}));
